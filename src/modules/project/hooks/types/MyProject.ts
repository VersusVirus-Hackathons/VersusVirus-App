/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyProject
// ====================================================

export interface MyProject_me_team_challengeSelected {
  __typename: "Challenge";
  id: string;
}

export interface MyProject_me_team_projects_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface MyProject_me_team_projects_images {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface MyProject_me_team_projects_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface MyProject_me_team_projects_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: MyProject_me_team_projects_challenge_primaryTopic;
}

export interface MyProject_me_team_projects {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: MyProject_me_team_projects_thumbnail | null;
  description: string | null;
  technologiesUsed: string | null;
  obstacles: string | null;
  accomplishments: string | null;
  learnings: string | null;
  nextSteps: string | null;
  videoUrl: string | null;
  urls: string[];
  images: MyProject_me_team_projects_images[];
  isPublished: boolean;
  relevanceToHackathon: string | null;
  relevanceToChallenge: string | null;
  longTermImpact: string | null;
  progressDuringHackathon: string | null;
  valueAdded: string | null;
  challenge: MyProject_me_team_projects_challenge | null;
}

export interface MyProject_me_team {
  __typename: "Team";
  id: string;
  challengeSelected: MyProject_me_team_challengeSelected | null;
  projects: MyProject_me_team_projects[];
}

export interface MyProject_me {
  __typename: "User";
  id: string;
  team: MyProject_me_team | null;
}

export interface MyProject {
  me: MyProject_me | null;
}
