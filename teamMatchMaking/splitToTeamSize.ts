import { User } from "@prisma/client";
import times from "lodash/times";
import { TeamWithMembers, DetailedUser } from ".";
import { getPrimaryTopic } from "./extractProposedTeams";
import { teamId } from "./createTeams";

export default function splitToTeamSize(
  users: User[],
  teamSize: number,
  startTeamIndexAt: number,
): TeamWithMembers[] {
  if (teamSize < 1) throw new TypeError("Team size too small.");

  const usersToDistribute = [...users];
  const totalNumberOfUsers = users.length;
  const numberOfTeams = Math.ceil(totalNumberOfUsers / teamSize);

  const teams: TeamWithMembers[] = [];

  for (let teamIndex of times(numberOfTeams)) {
    const members: DetailedUser[] = [];

    while (members.length < teamSize && usersToDistribute.length > 0) {
      const member = usersToDistribute.shift(); // remove
      members.push(member);
    }

    const topics = [];
    members.forEach((user) => {
      if (user?.hackerTopics?.length > 0) {
        user.hackerTopics.forEach((t) => topics.push(t as any));
      }
    });

    const team: TeamWithMembers = {
      id: teamId(startTeamIndexAt + teamIndex),
      members,
    };

    if (topics.length > 0) {
      team.topic = getPrimaryTopic(topics);
    }

    teams.push(team);
  }

  return teams;
}
