import { extendType, objectType } from "@nexus/schema";
import { seed } from "../../../seed";
import teamMatchMaking from "../../../teamMatchMaking";
import { Team } from "../team";
import shuffle from "lodash/shuffle";

export const RecreateAllTeamsResult = objectType({
  name: "RecreateAllTeamsResult",
  definition(t) {
    t.list.field("teams", {
      type: Team,
    });
  },
});

export const ChoseTeamChallengeVoteWinnerResult = objectType({
  name: "ChoseTeamChallengeVoteWinnerResult",
  definition(t) {
    t.boolean("success");
    t.int("teamsUpdated");
    t.list.field("teams", {
      type: Team,
    });
  },
});

export const UnsetAllSelectedChallengesResult = objectType({
  name: "UnsetAllSelectedChallengesResult",
  definition(t) {
    t.boolean("success");

    t.list.field("teams", {
      type: Team,
    });
  },
});

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("choseTeamChallengeVoteWinner", {
      type: ChoseTeamChallengeVoteWinnerResult,
      async resolve(root, args, { prisma }) {
        let teamsUpdated = 0;
        const teams = await prisma.team.findMany({ where: {} });

        for (const team of teams) {
          const teamPromise = prisma.team.findOne({
            where: {
              id: team.id,
            },
          });
          const teamChallenges = await teamPromise.challengesToSelect({
            select: {
              id: true,
            },
          });

          const challengeSelected = await teamPromise.challengeSelected({
            select: {
              id: true,
            },
          });

          // skip if they already have a challenge selected
          // or if they have no challenges assigned
          if (!challengeSelected && teamChallenges.length > 0) {
            const challengesWithVotes = shuffle(
              await Promise.all(
                teamChallenges.map(async (challenge) => ({
                  challengeId: challenge.id,
                  score: (
                    await teamPromise.challengeVotes({
                      where: {
                        challenge: {
                          id: challenge.id,
                        },
                        team: {
                          id: team.id,
                        },
                      },
                    })
                  ).reduce((sum, vote) => sum + vote.score, 0),
                })),
              ),
            ).sort((a, b) => b.score - a.score);
            // since we shuffle first and then sort in place,
            // we get a random result when two challenges have the same score
            const winner = challengesWithVotes[0];
            if (winner) {
              teamsUpdated++;
              await prisma.team.update({
                where: {
                  id: team.id,
                },
                data: {
                  challengeSelected: {
                    connect: {
                      id: winner.challengeId,
                    },
                  },
                },
              });
            }
          } else {
            console.log("skipping team " + team.id);
          }
        }
        //

        return {
          teamsUpdated,
          success: true,
          teams: prisma.team.findMany({ where: {} }),
        };
      },
    });
    t.field("seed", {
      type: "Boolean",

      async resolve(root) {
        await seed();
        return true;
      },
    });

    t.field("unsetAllSelectedChallenges", {
      type: UnsetAllSelectedChallengesResult,
      async resolve(root, args, { prisma }) {
        const teams = await prisma.team.findMany({});
        for (const team of teams) {
          try {
            await prisma.team.update({
              where: { id: team.id },
              data: {
                challengeSelected: {
                  disconnect: true,
                },
              },
            });
          } catch (e) {
            //
          }
        }
        return {
          success: true,
          teams: prisma.team.findMany({ where: {} }),
        };
      },
    });

    t.field("recreateAllTeams", {
      type: RecreateAllTeamsResult,
      async resolve(root, args, { prisma }) {
        try {
          await teamMatchMaking();
          return {
            teams: prisma.team.findMany({ where: {} }),
          };
        } catch (e) {
          console.error(e);
          throw e;
        }
      },
    });
  },
});
