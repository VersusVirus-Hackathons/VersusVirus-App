/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectOverview
// ====================================================

export interface ProjectOverview_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface ProjectOverview_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface ProjectOverview_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: ProjectOverview_challenge_primaryTopic;
}

export interface ProjectOverview {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: ProjectOverview_thumbnail | null;
  challenge: ProjectOverview_challenge | null;
}
