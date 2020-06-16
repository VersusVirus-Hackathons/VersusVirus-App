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

export interface UpdateProject_updateOneProject {
  __typename: "Project";
  id: string;
  title: string;
  tagline: string;
  thumbnail: UpdateProject_updateOneProject_thumbnail | null;
}

export interface UpdateProject {
  updateOneProject: UpdateProject_updateOneProject | null;
}

export interface UpdateProjectVariables {
  projectId?: string | null;
  data: ProjectUpdateInput;
}
