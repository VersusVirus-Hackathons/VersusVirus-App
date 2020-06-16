import { extendType, objectType, mutationType, stringArg } from "@nexus/schema";
import { newToken, getHash } from "./tokenUtils";
import prisma from "../../../prisma/prisma";
import sendEmail from "../email/sendEmail";
import { stripIndents } from "common-tags";
import moment from "moment";
import { SlackConversation, resolveSlackChannel } from "../slack";
import welcomeEmail from "../email/welcomeEmail";
import sendWelcomeEmail from "../email/welcomeEmail";
import sendTeamMemberActivationEmail from "../email/teamMemberActivationEmail";

const ensureAdminRole = async () => {
  if ((await prisma.userRole.count()) === 0) {
    await prisma.userRole.create({
      data: {
        id: "admin",
      },
    });
  }
};
ensureAdminRole();

export const UserRole = objectType({
  name: "UserRole",
  definition(t) {
    t.model.id();
    t.model.users();
  },
});

export const Image = objectType({
  name: "Image",
  definition(t) {
    t.model.id();
    t.model.base64();
  },
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.languages();
    t.model.firstname();
    t.model.lastname();
    t.model.city();
    t.model.phoneNumber();
    t.model.profilePhoto();

    t.model.participateInTeamBuildingSession();
    t.model.possibleTeamMemberEmails();

    t.model.instagram();
    t.model.linkedin();
    t.model.facebook();
    t.model.twitter();

    t.model.hackerSkills();
    t.model.hackerTopics();
    t.model.hackerTypes();
    t.model.devpostUrl();

    t.model.team();

    t.model.roles(null);
  },
});

export const HackerType = objectType({
  name: "HackerType",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
  },
});

export const HackerTopic = objectType({
  name: "HackerTopic",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.primaryChallenges();

    t.field("slack", {
      type: SlackConversation,
      nullable: true,
      async resolve(root, args, { prisma }) {
        return resolveSlackChannel({
          isTopic: true,
          team: root,
          prisma: prisma,
        });
      },
    });
  },
});

export const HackerSkill = objectType({
  name: "HackerSkill",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
  },
});

export const LoginResult = objectType({
  name: "LoginResult",
  definition(t) {
    t.field("user", {
      type: User,
    });
    t.string("resumeToken");
  },
});

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("logout", {
      type: "Boolean",
      resolve(root, args, { res }) {
        res.setHeader(
          "Set-Cookie",
          `resumetoken=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Domain=${
            new URL(process.env.ROOT_URL).hostname
          }`,
        );
        return true;
      },
    });
    t.field("loginWithToken", {
      type: LoginResult,
      args: {
        email: stringArg(),
        loginToken: stringArg(),
      },
      async resolve(root, { email: emailOrg, loginToken }, { res }) {
        // verify
        const email = emailOrg.toLowerCase();
        const hashedLoginToken = getHash(loginToken);
        const userPromise = prisma.user.findOne({
          where: {
            email,
          },
        });
        const [token] = await userPromise.loginTokens({
          where: {
            hashedToken: hashedLoginToken,
          },
        });
        if (!token) {
          throw new Error("unknown user/token");
        }
        const user = await userPromise;
        await prisma.userLoginToken.delete({
          where: {
            id: token.id,
          },
        });

        const wasConfirmed = user.emailConfirmed;
        try {
          if (!wasConfirmed) {
            const user = await prisma.user.findOne({
              where: {
                email,
              },
            });
            const loginToken = newToken();
            await prisma.userLoginToken.create({
              data: {
                user: {
                  connect: {
                    id: user.id,
                  },
                },
                hashedToken: getHash(loginToken),
              },
            });

            await sendWelcomeEmail(user.email, user.firstname);
            await sendTeamMemberActivationEmail(
              user.firstname,
              user.lastname,
              user.possibleTeamMemberEmails,
            );
          }
        } catch (e) {
          console.error(e);
        }

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            emailConfirmed: true,
          },
        });

        const resumeToken = newToken();

        const hashedToken = getHash(resumeToken);
        await prisma.userResumeToken.create({
          data: {
            hashedToken,
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });

        const formattedExpires = moment().add(8, "weeks").utc();

        res.setHeader(
          "Set-Cookie",
          `resumetoken=${resumeToken}; Path=/; expires=${formattedExpires}; HttpOnly; Domain=${
            new URL(process.env.ROOT_URL).hostname
          }`,
        );

        return {
          user,
          resumeToken,
        };
      },
    });

    t.field("anonymizeOneUser", {
      type: "Boolean",
      args: {
        email: stringArg({ required: true }),
      },
      async resolve(root, { email }, { res }) {
        const roles = await prisma.user.findOne({ where: { email } }).roles();
        const { id } = await prisma.user.findOne({ where: { email } });

        await prisma.user.update({
          where: { email },
          data: {
            firstname: "anonymized",
            lastname: "anonymized",

            email: `vsvirus+${id}@panter.swiss`,
            phoneNumber: "anonymized",
            possibleTeamMemberEmails: null,
            linkedin: null,
            instagram: null,
            facebook: null,
            twitter: null,
            devpostUrl: null,
            isAnonymized: true,
            ...(roles.length && { roles: { disconnect: { id: "admin" } } }),
          },
        });

        await Promise.all([
          prisma.challenge.updateMany({
            where: { contactEmail: email },
            data: { contactEmail: "anonymized", contactName: "anonymized" },
          }),
          prisma.image.deleteMany({ where: { user: { id } } }),
        ]);

        return true;
      },
    });
  },
});

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: User,
      nullable: true,
      resolve(root, args, { user }) {
        return user;
      },
    });

    t.crud.hackerTypes(null);
    t.crud.hackerSkills(null);
    t.crud.hackerTopics(null);
  },
});

export const CrudMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.updateManyUser(null);

    t.crud.createOneHackerSkill();
    t.crud.createOneHackerTopic();
    t.crud.createOneHackerType();

    t.crud.updateOneHackerSkill();
    t.crud.updateOneHackerTopic();
    t.crud.updateOneHackerType();

    t.crud.deleteOneHackerSkill();
    t.crud.deleteOneHackerTopic();
    t.crud.deleteOneHackerType();

    t.boolean("submitDevpostUrl", {
      args: {
        devpostUrl: stringArg({ required: true }),
      },
      async resolve(_, { devpostUrl }, { user }) {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            devpostUrl,
          },
        });

        return true;
      },
    });
  },
});
