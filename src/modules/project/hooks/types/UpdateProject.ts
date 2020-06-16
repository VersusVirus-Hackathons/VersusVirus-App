/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProjectUpdateInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL mutation operation: UpdateProject
// ====================================================

export interface UpdateProject_updateOneProject_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface UpdateProject_updateOneProject_images {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface UpdateProject_updateOneProject_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface UpdateProject_updateOneProject_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: UpdateProject_updateOneProject_challenge_primaryTopic;
}

export interface UpdateProject_updateOneProject {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: UpdateProject_updateOneProject_thumbnail | null;
  description: string | null;
  technologiesUsed: string | null;
  obstacles: string | null;
  accomplishments: string | null;
  learnings: string | null;
  nextSteps: string | null;
  videoUrl: string | null;
  urls: string[];
  images: UpdateProject_updateOneProject_images[];
  isPublished: boolean;
  relevanceToHackathon: string | null;
  relevanceToChallenge: string | null;
  longTermImpact: string | null;
  progressDuringHackathon: string | null;
  valueAdded: string | null;
  challenge: UpdateProject_updateOneProject_challenge | null;
}

export interface UpdateProject {
  updateOneProject: UpdateProject_updateOneProject | null;
}

export interface UpdateProjectVariables {
  projectId?: string | null;
  data: ProjectUpdateInput;
}
