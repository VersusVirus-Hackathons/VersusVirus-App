import "../generated/nexus";

import * as path from "path";

import { ApolloServer } from "apollo-server-micro";
import prisma from "../prisma/prisma";
import { makeSchema } from "@nexus/schema";
import { Context } from "./types";
import { nexusPrismaPlugin } from "nexus-prisma";

import { applyMiddleware } from "graphql-middleware";

import * as signup from "./modules/signup";
import * as user from "./modules/user";
import * as schedule from "./modules/schedule";
import * as team from "./modules/team";
import * as special from "./modules/special";
import * as challenge from "./modules/challenge";
import * as project from "./modules/project";
import * as slack from "./modules/slack";
import * as mentor from "./modules/mentor";
import * as broadcast from "./modules/broadcast";
import getUserFromToken from "./modules/user/getUserFromToken";
import { rule, allow, shield } from "graphql-shield";
import makeAdminCompatible from "./makeAdminCompatible";
const typegenPath = (p: string) =>
  process.env.PWD && path.join(process.env.PWD, p);

const schema = makeSchema({
  types: [
    signup,
    user,
    challenge,
    team,
    schedule,
    special,
    project,
    slack,
    mentor,
    broadcast,

    makeAdminCompatible("Challenge"),
    makeAdminCompatible("Team"),
    makeAdminCompatible("TeamChallengeVote"),
    makeAdminCompatible("User"),
    makeAdminCompatible("UserRole"),
    makeAdminCompatible("Mentor"),
    makeAdminCompatible("Schedule"),
    makeAdminCompatible("Project"),
    makeAdminCompatible("HackerTopic"),
    makeAdminCompatible("HackerSkill"),
    makeAdminCompatible("HackerType"),
    makeAdminCompatible("Image"),
  ],
  plugins: [
    nexusPrismaPlugin({
      outputs: {
        typegen: typegenPath("./generated/nexus-prisma.ts"),
      },
    }),
  ],
  typegenAutoConfig: {
    contextType: "t.Context",
    sources: [
      {
        source: typegenPath("./graphql/types.ts"),

        alias: "t",
      },
    ],
  },
  outputs: {
    schema: typegenPath("./generated/schema.graphql"),
    typegen: typegenPath("./generated/nexus.ts"),
  },
});

const isAdmin = rule({ cache: false })(
  async (parent, args, { user, prisma }: Context, info) => {
    if (!user) {
      return false;
    }

    return prisma.user
      .findOne({ where: { id: user.id } })
      .roles({
        where: {
          id: "admin",
        },
      })
      .then((roles) => roles.length > 0);
  },
);

const isLoggedIn = rule({ cache: false })(
  async (parent, args, { user, prisma }: Context, info) => {
    return Boolean(user);
  },
);
const permissions = shield(
  {
    User: {
      "*": isLoggedIn,
      id: allow,
    },
    Challenge: {
      "*": allow,
      teamsThatCanSelectThisChallenge: isAdmin,
    },
    Query: {
      "*": allow,
      users: isAdmin,
      user: isAdmin,
      teams: isAdmin,
      team: isAdmin,
    },
    Mutation: {
      "*": isAdmin,
      resendVerificationEmail: allow,
      registerHacker: allow,
      loginWithToken: allow,
      logout: allow,
      voteForChallenge: isLoggedIn,
      createOneProject: isLoggedIn,
      submitDevpostUrl: isLoggedIn,
      updateOneProject: isLoggedIn, // TODO: only admin and project members shuld be able to update the project
    },
  },
  {
    debug: true,
  },
);

export default new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  introspection: true,
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },

  context: async (ctx): Promise<Context> => {
    const { authorization } = ctx.req.headers;
    //const lang = getUserLang(ctx.req.headers["accept-language"]);
    const token = authorization || ctx.req.cookies?.resumetoken;

    const user = token ? await getUserFromToken(token) : null;

    return { res: ctx.res, prisma, user };
  },
});
