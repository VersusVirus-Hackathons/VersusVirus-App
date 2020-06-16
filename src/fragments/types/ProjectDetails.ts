/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectDetails
// ====================================================

export interface ProjectDetails_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface ProjectDetails_images {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface ProjectDetails_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface ProjectDetails_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: ProjectDetails_challenge_primaryTopic;
}

export interface ProjectDetails {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: ProjectDetails_thumbnail | null;
  description: string | null;
  technologiesUsed: string | null;
  obstacles: string | null;
  accomplishments: string | null;
  learnings: string | null;
  nextSteps: string | null;
  videoUrl: string | null;
  urls: string[];
  images: ProjectDetails_images[];
  isPublished: boolean;
  relevanceToHackathon: string | null;
  relevanceToChallenge: string | null;
  longTermImpact: string | null;
  progressDuringHackathon: string | null;
  valueAdded: string | null;
  challenge: ProjectDetails_challenge | null;
}
