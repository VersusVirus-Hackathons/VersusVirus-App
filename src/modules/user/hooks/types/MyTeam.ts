/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyTeam
// ====================================================

export interface MyTeam_me_roles {
  __typename: "UserRole";
  id: string;
}

export interface MyTeam_me_team_projects {
  __typename: "Project";
  id: string;
}

export interface MyTeam_me_team_slack {
  __typename: "SlackConversation";
  url: string;
}

export interface MyTeam_me_team_challengesToSelectWithMyVotes_challenge {
  __typename: "Challenge";
  id: string;
  title: string;
  context: string;
  challenge: string;
  solution: string | null;
  resources: string | null;
}

export interface MyTeam_me_team_challengesToSelectWithMyVotes {
  __typename: "ChallengeWithMyVote";
  challenge: MyTeam_me_team_challengesToSelectWithMyVotes_challenge;
  myVote: number;
}

export interface MyTeam_me_team_challengeSelected {
  __typename: "Challenge";
  id: string;
  title: string;
  context: string;
  challenge: string;
  solution: string | null;
  resources: string | null;
}

export interface MyTeam_me_team_members_hackerSkills {
  __typename: "HackerSkill";
  id: string;
  title: string;
}

export interface MyTeam_me_team_members_hackerTypes {
  __typename: "HackerType";
  id: string;
  title: string;
}

export interface MyTeam_me_team_members {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
  hackerSkills: MyTeam_me_team_members_hackerSkills[];
  hackerTypes: MyTeam_me_team_members_hackerTypes[];
  linkedin: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
  languages: string[];
}

export interface MyTeam_me_team {
  __typename: "Team";
  id: string;
  projects: MyTeam_me_team_projects[];
  slack: MyTeam_me_team_slack | null;
  challengesToSelectWithMyVotes: MyTeam_me_team_challengesToSelectWithMyVotes[];
  challengeSelected: MyTeam_me_team_challengeSelected | null;
  members: MyTeam_me_team_members[];
}

export interface MyTeam_me {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
  roles: MyTeam_me_roles[];
  team: MyTeam_me_team | null;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
}

export interface MyTeam {
  me: MyTeam_me | null;
}
