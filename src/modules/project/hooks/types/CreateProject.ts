/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProjectCreateInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createOneProject_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface CreateProject_createOneProject_images {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface CreateProject_createOneProject_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface CreateProject_createOneProject_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: CreateProject_createOneProject_challenge_primaryTopic;
}

export interface CreateProject_createOneProject {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: CreateProject_createOneProject_thumbnail | null;
  description: string | null;
  technologiesUsed: string | null;
  obstacles: string | null;
  accomplishments: string | null;
  learnings: string | null;
  nextSteps: string | null;
  videoUrl: string | null;
  urls: string[];
  images: CreateProject_createOneProject_images[];
  isPublished: boolean;
  relevanceToHackathon: string | null;
  relevanceToChallenge: string | null;
  longTermImpact: string | null;
  progressDuringHackathon: string | null;
  valueAdded: string | null;
  challenge: CreateProject_createOneProject_challenge | null;
}

export interface CreateProject {
  createOneProject: CreateProject_createOneProject;
}

export interface CreateProjectVariables {
  data: ProjectCreateInput;
}
