import prisma from "../prisma/prisma";
import createTeams from "./createTeams";
import { User, TeamCreateArgs, Team, Challenge } from "@prisma/client";
import assignChallengesToTeams from "./assignChallengesToTeams";

export type TeamWithMembers = {
  id: string;
  members: User[];
  challenges?: string[];
  topic?: string;
};

// This data type is passed between the extract and split functions
export type PoolWithExtractedTeams = {
  pool: User[];
  teams: TeamWithMembers[];
};

export type DetailedUser = User & {
  hackerSkills?: object[];
  hackerTypes?: object[];
  hackerTopics?: object[];
  roles?: Array<{ id: string }>;
};

const mixInUserDeatails = async (user: User) => {
  // FIXME: use {include}
  const userPromise = prisma.user.findOne({ where: { id: user.id } });

  return {
    ...user,
    hackerSkills: await userPromise.hackerSkills(),
    hackerTypes: await userPromise.hackerTypes(),
    hackerTopics: await userPromise.hackerTopics(),
    roles: await userPromise.roles(),
  };
};

export default async () => {
  const allConfirmedUsers = await prisma.user.findMany({
    where: {
      emailConfirmed: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  for (let i = 0; i < allConfirmedUsers.length; i++) {
    console.log(`loading user ${i + 1} of ${allConfirmedUsers.length}`);
    allConfirmedUsers[i] = await mixInUserDeatails(allConfirmedUsers[i]);
  }

  const allConfirmedAndNonAdminUsers = allConfirmedUsers.filter((user) => {
    return !(
      user !== undefined &&
      user.hasOwnProperty("roles") &&
      (user as DetailedUser).roles != null &&
      (user as DetailedUser).roles.some((el) => el.id === "admin")
    );
  });

  const teams = await createTeams(allConfirmedAndNonAdminUsers);

  await prisma.team.deleteMany({ where: {} });
  let index = 0;
  for (let team of teams) {
    console.log(`creating team ${index + 1} of ${teams.length}`);
    index++;
    let args: TeamCreateArgs = {
      data: {
        id: team.id,
        members: {
          connect: team.members.map((user) => ({
            id: user.id,
          })),
        },
      },
    };
    if (team?.topic != null) {
      args.data.primaryTopic = {
        connect: { id: team.topic },
      };
    }
    await prisma.team.create(args);
  }

  const allChallenges: Challenge[] = await prisma.challenge.findMany({
    include: {
      primaryTopic: true,
    },
  });
  const teamsWithChallenges = await assignChallengesToTeams(
    allChallenges,
    teams,
  );
  for (const team of teamsWithChallenges) {
    if (team?.challenges?.length > 0) {
      await prisma.team.update({
        where: { id: team.id },
        data: {
          challengesToSelect: {
            connect: team.challenges.map((challengeId) => ({
              id: challengeId,
            })),
          },
        },
      });
    }
  }

  // Sanity check by looking up users without a team assignment
  const usersWithoutTeams = await prisma.user.findMany({
    where: {
      emailConfirmed: true,
      team: null,
    },
  });

  for (let i = 0; i < usersWithoutTeams.length; i++) {
    console.log(`loading user ${i + 1} of ${usersWithoutTeams.length}`);
    usersWithoutTeams[i] = await mixInUserDeatails(usersWithoutTeams[i]);
  }

  const usersWithoutTeamsAndNonAdmin = usersWithoutTeams.filter((user) => {
    return !(
      user !== undefined &&
      user.hasOwnProperty("roles") &&
      (user as DetailedUser).roles != null &&
      (user as DetailedUser).roles.some((el) => el.id === "admin")
    );
  });

  if (usersWithoutTeamsAndNonAdmin.length > 0) {
    throw Error(
      `There are ${usersWithoutTeamsAndNonAdmin.length} users without teams. Should be zero!`,
    );
  }
};
