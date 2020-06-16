import { TeamWithMembers } from ".";
import { Challenge } from "@prisma/client";

export default async function assignChallengesToTeams(
  challenges: Challenge[],
  teams: TeamWithMembers[],
) {
  teams.forEach((team) => {
    team.challenges = [];
    if (team?.topic != null) {
      challenges.forEach((challenge) => {
        if (team.topic === (challenge as any).primaryTopic.id) {
          team.challenges.push(challenge.id);
        }
      });
    }
  });

  return teams;
}
