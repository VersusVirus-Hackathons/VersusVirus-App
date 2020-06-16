import { User } from "@prisma/client";
import { PoolWithExtractedTeams, TeamWithMembers, DetailedUser } from ".";
import { teamId } from "./createTeams";
import { parseEmailsFromString } from "../src/utils/stringUtils";

export function createEmailsToIndex(users) {
  const obj = {};
  for (let index = 0; index < users.length; index++) {
    if (users[index]?.email != null) {
      obj[users[index].email.trim().toLowerCase()] = index;
    }
  }
  return obj;
}

export function getPrimaryTopic(topics: Array<{ id: string }>): string {
  const flat = [];
  topics.forEach((topic) => {
    if (topic?.id != null) flat.push(topic.id);
  });

  const counts = {};
  for (var i = 0; i < flat.length; i++) {
    counts[flat[i]] = counts[flat[i]] ? counts[flat[i]] + 1 : 1;
  }

  let maxKey;
  let maxVal = 0;
  for (let key in counts) {
    if (counts[key] > maxVal) {
      maxVal = counts[key];
      maxKey = key;
    }
  }

  return maxKey;
}

export default function extractProposedTeams(
  users: User[],
  startTeamIndexAt: number,
): PoolWithExtractedTeams {
  const teams: TeamWithMembers[] = [];
  let usersWithExtractedPropsedTeams = [...users];

  const emailsToIndex = createEmailsToIndex(users);

  function follow(
    user: DetailedUser,
    userIndex: number,
    team: TeamWithMembers,
    teamIndex: number,
    topics: Array<{ id: string }>,
  ) {
    const hasPossibleTeamMembers =
      user !== undefined && user.possibleTeamMemberEmails != null;
    const proposedTeamMembers = hasPossibleTeamMembers
      ? parseEmailsFromString(user.possibleTeamMemberEmails)
      : null;

    if (proposedTeamMembers !== null) {
      proposedTeamMembers.forEach((proposedTeamMemberEmail) => {
        // We only add users together to a team if they signed up (and not just propsed by somebody else).
        const proposedTeamMemberIsSignedUp = emailsToIndex.hasOwnProperty(
          proposedTeamMemberEmail,
        );
        if (proposedTeamMemberIsSignedUp) {
          // Add them to the team
          if (team === undefined) {
            team = {
              id: teamId(startTeamIndexAt + teamIndex),
              members: [],
            };

            // Add user to the team
            team.members.push(user);

            // Add topics of user
            if (user?.hackerTopics?.length > 0) {
              user.hackerTopics.forEach((t) => topics.push(t as any));
            }

            // Remove user from pool
            usersWithExtractedPropsedTeams[userIndex] = undefined;

            // Remove email from the lookup
            delete emailsToIndex[user.email];
          }

          const proposedTeamMemberIndex =
            emailsToIndex[proposedTeamMemberEmail];
          const proposedTeamMember: DetailedUser =
            usersWithExtractedPropsedTeams[proposedTeamMemberIndex];
          if (proposedTeamMember) {
            // Add member to the team
            team.members.push(proposedTeamMember);

            // Add topics of user
            if (proposedTeamMember?.hackerTopics?.length > 0) {
              proposedTeamMember.hackerTopics.forEach((t) =>
                topics.push(t as any),
              );
            }

            // Remove member from the pool
            usersWithExtractedPropsedTeams[proposedTeamMemberIndex] = undefined;

            // Remove email from the lookup
            delete emailsToIndex[proposedTeamMember.email];

            follow(
              proposedTeamMember,
              proposedTeamMemberIndex,
              team,
              teamIndex,
              topics,
            );
          } else {
            // The team member has already been added to the team and removed from emailsToIndex.
          }
        } else {
          // `The proposed team member with email ${proposedTeamMemberEmail} does not exist as a user. They should have signed up.`
        }
      });
    }

    if (topics.length > 0) {
      team.topic = getPrimaryTopic(topics);
    }

    return team;
  }

  let teamIndex = 0;
  usersWithExtractedPropsedTeams.forEach((user, userIndex) => {
    const userHasPossibleTeamMembers =
      user !== undefined && user.possibleTeamMemberEmails != null;
    const proposedTeamMembersOfUser = userHasPossibleTeamMembers
      ? parseEmailsFromString(user.possibleTeamMemberEmails)
      : null;

    if (proposedTeamMembersOfUser !== null) {
      const team = follow(user, userIndex, undefined, teamIndex, []);

      if (team !== undefined) {
        teamIndex += 1;
        teams.push(team);
      }
    }
  });

  // Filter out the undefinde ones
  const pool = usersWithExtractedPropsedTeams.filter((el) => el != null);
  return { pool, teams };
}
