import { objectType, extendType, stringArg, intArg } from "@nexus/schema";
import { SlackConversation, resolveSlackChannel } from "../slack";

export const ChallengeWithMyVote = objectType({
  name: "ChallengeWithMyVote",
  definition(t) {
    t.field("challenge", {
      type: "Challenge",
    });
    t.int("myVote");
  },
});

export const TeamChallengeVote = objectType({
  name: "TeamChallengeVote",
  definition(t) {
    t.model.id();
  },
});
export const Team = objectType({
  name: "Team",
  definition(t) {
    t.model.id();
    t.model.challengeSelected();
    t.model.challengesToSelect();
    t.model.projects();
    t.model.tags();
    t.model.primaryTopic();
    t.list.field("challengesToSelectWithMyVotes", {
      type: ChallengeWithMyVote,
      async resolve(team, args, { prisma, user }) {
        const teamPromise = prisma.team.findOne({ where: { id: team.id } });

        const challenges = await teamPromise.challengesToSelect();

        return challenges.map((challenge) => ({
          challenge,
          myVote: teamPromise
            .challengeVotes({
              where: {
                user: {
                  id: user.id,
                },
                challenge: {
                  id: challenge.id,
                },
              },
            })
            .then((vs) => vs.reduce((acc, v) => acc + v.score, 0)),
        }));
      },
    });

    t.model.members();
    t.field("slack", {
      type: SlackConversation,
      nullable: true,
      async resolve(team, args, { prisma }) {
        return resolveSlackChannel({
          team: team,
          prisma: prisma,
        });
      },
    });
  },
});

export const VoteResult = objectType({
  name: "VoteResult",
  definition(t) {
    t.field("team", {
      type: Team,
    });
  },
});
export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("voteForChallenge", {
      type: VoteResult,
      args: {
        challengeId: stringArg(),
        score: intArg(),
      },
      async resolve(root, { challengeId, score }, { user, prisma }) {
        if (!user) {
          throw new Error("not logged in");
        }

        const teamPromise = prisma.user
          .findOne({ where: { id: user.id } })
          .team();
        const team = await teamPromise;
        // delete votes that dont belong anymore to this team
        const challenges = await prisma.team
          .findOne({
            where: {
              id: team.id,
            },
          })
          .challengesToSelect();

        await prisma.teamChallengeVote.deleteMany({
          where: {
            team: {
              id: team.id,
            },
            NOT: {
              challenge: {
                id: {
                  in: challenges.map((c) => c.id),
                },
              },
            },
          },
        });
        const where = {
          userId_challengeId_teamId: {
            challengeId,
            teamId: team.id,
            userId: user.id,
          },
        };
        if (score === 0) {
          prisma.teamChallengeVote.delete({
            where,
          });
        }

        // check that a user has max 6 votes
        const otherVotes = await teamPromise.challengeVotes({
          where: {
            user: {
              id: user.id,
            },

            NOT: {
              challenge: {
                id: challengeId,
              },
            },
          },
        });

        const totalScore = otherVotes.reduce(
          (sum, vote) => sum + vote.score,
          0,
        );

        if (score + totalScore > 6) {
          throw new Error("already reached max of votes");
        }

        await prisma.teamChallengeVote.upsert({
          where,
          create: {
            challenge: {
              connect: {
                id: challengeId,
              },
            },
            team: {
              connect: {
                id: (await teamPromise).id,
              },
            },
            user: {
              connect: { id: user.id },
            },
            score,
          },
          update: {
            score,
          },
        });

        return {
          team: await teamPromise,
        };
      },
    });
  },
});
