/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Project
// ====================================================

export interface Project_project_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface Project_project_images {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface Project_project_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface Project_project_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: Project_project_challenge_primaryTopic;
}

export interface Project_project {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: Project_project_thumbnail | null;
  description: string | null;
  technologiesUsed: string | null;
  obstacles: string | null;
  accomplishments: string | null;
  learnings: string | null;
  nextSteps: string | null;
  videoUrl: string | null;
  urls: string[];
  images: Project_project_images[];
  isPublished: boolean;
  relevanceToHackathon: string | null;
  relevanceToChallenge: string | null;
  longTermImpact: string | null;
  progressDuringHackathon: string | null;
  valueAdded: string | null;
  challenge: Project_project_challenge | null;
}

export interface Project {
  project: Project_project | null;
}

export interface ProjectVariables {
  projectId: string;
}
