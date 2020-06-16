import { stripIndents } from "common-tags";
import {
  inputObjectType,
  mutationType,
  objectType,
  stringArg,
} from "@nexus/schema";
import prisma from "../../../prisma/prisma";
import sendEmail from "../email/sendEmail";
import { getHash, newToken } from "../user/tokenUtils";
import omit from "lodash/omit";

export const RegisterHackerInput = inputObjectType({
  name: "RegisterHackerInput",
  definition(t) {
    t.string("firstname", { required: true });
    t.string("lastname", { required: true });
    t.string("phoneNumber", { required: true });
    t.string("profilePhotoBase64");
    t.string("possibleTeamMemberEmails");
    t.boolean("participateInTeamBuildingSession");
    t.string("linkedin");
    t.string("instagram");
    t.string("facebook");
    t.string("twitter");

    t.list.string("languages", { required: true });
    t.string("email", { required: true });
    t.string("city", { required: true });
    t.list.string("hackerSkills", { required: true });
    t.list.string("hackerTypes", { required: true });

    t.list.string("hackerTopics", { required: true });
  },
});

export const RegisterResult = objectType({
  name: "RegisterResult",
  definition(t) {
    t.boolean("success");
  },
});

export const ResendVerificationEmailResult = objectType({
  name: "ResendVerificationEmailResult",
  definition(t) {
    t.boolean("success");
  },
});

const sendVerificationEmail = async (email: string) => {
  const user = await prisma.user.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("unknown user");
  }

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

  await sendEmail({
    to: user.email,
    subject: "#VersusVirus Hackathon Email Confirm",

    text: stripIndents`
      Hello ${user.firstname},

      You need to confirm your e-mail address on #VersusVirus Hackathon.


      Please click the following link:
      ${process.env.ROOT_URL}/confirmEmail?email=${encodeURIComponent(
      user.email,
    )}&token=${loginToken}

      Thank you!


    `,
  });
};
export const Mutation = mutationType({
  definition(t) {
    t.field("resendVerificationEmail", {
      args: {
        email: stringArg(),
      },
      type: ResendVerificationEmailResult,

      async resolve(root, { email }) {
        await sendVerificationEmail(email.toLowerCase());
        return {
          success: true,
        };
      },
    });

    t.field("registerHacker", {
      args: {
        data: RegisterHackerInput,
      },
      type: RegisterResult,
      async resolve(root, { data }, { prisma }) {
        // check if there is already an unconfirmed user with that email, delete him
        const email = data.email.toLowerCase();
        const existingUser = await prisma.user.findOne({
          where: { email },
        });
        if (existingUser) {
          if (!existingUser.emailConfirmed) {
            await prisma.userLoginToken.deleteMany({
              where: {
                user: {
                  id: existingUser.id,
                },
              },
            });
            await prisma.user.delete({
              where: {
                id: existingUser.id,
              },
            });
          } else {
            throw new Error("email already exists");
          }
        }

        await prisma.user.create({
          data: {
            ...omit(data, ["profilePhotoBase64"]),
            email,
            ...(data.profilePhotoBase64
              ? {
                  profilePhoto: {
                    create: {
                      base64: data.profilePhotoBase64,
                    },
                  },
                }
              : {}),
            emailConfirmed: false,
            languages: {
              set: data.languages,
            },
            hackerTypes: {
              connect: data.hackerTypes.map((id) => ({ id })),
            },
            hackerSkills: {
              connect: data.hackerSkills.map((id) => ({ id })),
            },
            hackerTopics: {
              connect: data.hackerTopics.map((id) => ({ id })),
            },
          },
        });
        // don't await
        sendVerificationEmail(email);

        return {
          success: true,
        };
      },
    });
  },
});
