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

export interface CreateProject_createOneProject {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: CreateProject_createOneProject_thumbnail | null;
}

export interface CreateProject {
  createOneProject: CreateProject_createOneProject;
}

export interface CreateProjectVariables {
  data: ProjectCreateInput;
}
