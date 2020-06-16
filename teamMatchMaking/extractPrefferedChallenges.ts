import { User } from "@prisma/client";
import { PoolWithExtractedTeams, TeamWithMembers } from ".";
import { teamId } from "./createTeams";

export function uniquePreferredChallengeIds(users: User[]): string[] {
  const unique = [];
  users.forEach((user) => {
    if (
      user.preferredChallengeId != null &&
      !unique.includes(user.preferredChallengeId)
    )
      unique.push(user.preferredChallengeId);
  });
  return unique;
}

export default function extractPrefferedChallenges(
  users: User[],
  startTeamIndexAt: number = 1,
): PoolWithExtractedTeams {
  const teams: TeamWithMembers[] = [];
  const pool: User[] = [];
  const unassigned: User[] = [];
  let teamIndex = startTeamIndexAt;

  users.forEach((user) => {
    if (user.preferredChallengeId != null) {
      unassigned.push(user);
    } else {
      pool.push(user);
    }
  });

  const ids = uniquePreferredChallengeIds(unassigned);
  ids.forEach((id) => {
    const team: TeamWithMembers = {
      id: teamId(teamIndex),
      members: [],
      challenges: [id],
    };

    let i = unassigned.length;
    while (i--) {
      if (unassigned[i].preferredChallengeId === id) {
        team.members.push(unassigned.splice(i, 1)[0]);
      }
    }

    teamIndex += 1;
    teams.push(team);
  });

  return { pool, teams };
}
