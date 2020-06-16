import { User } from "@prisma/client";
import splitToTeamSize from "./splitToTeamSize";
import splitBySpokenLanguages from "./splitBySpokenLanguages";
import distributeByUserTypesAndSkills from "./distributeByUserTypesAndSkills";
import { TeamWithMembers } from ".";
import extractProposedTeams from "./extractProposedTeams";
import extractPrefferedChallenges from "./extractPrefferedChallenges";

export const OPTIMAL_TEAM_SIZE = 8;
export const ANTICIPATED_NO_SHOWS_PER_TEAM = 2;
export const TEAM_SIZE = OPTIMAL_TEAM_SIZE + ANTICIPATED_NO_SHOWS_PER_TEAM;
export const LANGUAGE_PRIORITIES = ["en", "de", "fr", "it"];
export const MINMAL_POOL_FOR_SKILLS_DISTRIBUTION = 200;

/*
  🤦 There were cases were participants believed they needed to switch to the team matching the number of their chosen challenge.
  E.g. a participant wants to work on challenge 5 and switches from team 10 to team 5.
  (The app never shows the challenge ID, just the title. However, the challenges were posted on Airtable as well, where they were ordered numerically.)
  To help avoid this confusion from happening in the future, start the teams at a 4-digit number well beyond the total amount of challenges.
*/
const TEAM_ID_STARTS_AT = 1000;
export const teamId = (teamIndex: number) =>
  "team-" + (TEAM_ID_STARTS_AT + teamIndex);

/* 
This is a simpler version of the function that just takes the languages into account.
*/
export function distributedByLanguage(users: User[]): TeamWithMembers[] {
  const usersSplitBySpokenLanguages = splitBySpokenLanguages(
    users,
    LANGUAGE_PRIORITIES,
  );
  let teams: TeamWithMembers[] = [];
  let teamIndex = 0;

  usersSplitBySpokenLanguages.forEach((group) => {
    const split = splitToTeamSize(group.users, TEAM_SIZE, teamIndex);
    teamIndex += split.length;
    teams = [...teams, ...split];
  });

  return teams;
}

/*
The default function:
  • extracts users with propsed teams
  • extracts users with preffered challenges
  • distributes participants by language
  • divides them by skills
*/
export default function createTeams(users: User[]): TeamWithMembers[] {
  const extractedProposedTeams = extractProposedTeams(users, 0);
  const extractedProposedChallenges = extractPrefferedChallenges(
    extractedProposedTeams.pool,
    extractedProposedTeams.teams.length + 1,
  );

  let teams = [
    ...extractedProposedTeams.teams,
    ...extractedProposedChallenges.teams,
  ];
  let teamIndex = teams.length + 1;

  const usersSplitBySpokenLanguages = splitBySpokenLanguages(
    extractedProposedChallenges.pool,
    LANGUAGE_PRIORITIES,
  );

  usersSplitBySpokenLanguages.forEach((group) => {
    const split =
      group.users.length >= MINMAL_POOL_FOR_SKILLS_DISTRIBUTION
        ? distributeByUserTypesAndSkills(group.users, TEAM_SIZE, teamIndex)
        : splitToTeamSize(group.users, TEAM_SIZE, teamIndex);
    teamIndex += split.length;
    teams = [...teams, ...split];
  });

  return teams;
}
