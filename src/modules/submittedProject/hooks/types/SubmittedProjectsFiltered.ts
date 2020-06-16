/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProjectWhereInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL query operation: SubmittedProjectsFiltered
// ====================================================

export interface SubmittedProjectsFiltered_projects_thumbnail {
  __typename: "Thumbnail";
  id: string;
  base64: string;
}

export interface SubmittedProjectsFiltered_projects_challenge_primaryTopic {
  __typename: "HackerTopic";
  id: string;
  title: string;
}

export interface SubmittedProjectsFiltered_projects_challenge {
  __typename: "Challenge";
  id: string;
  primaryTopic: SubmittedProjectsFiltered_projects_challenge_primaryTopic;
}

export interface SubmittedProjectsFiltered_projects {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: SubmittedProjectsFiltered_projects_thumbnail | null;
  challenge: SubmittedProjectsFiltered_projects_challenge | null;
}

export interface SubmittedProjectsFiltered {
  projects: SubmittedProjectsFiltered_projects[];
}

export interface SubmittedProjectsFilteredVariables {
  where: ProjectWhereInput;
}
