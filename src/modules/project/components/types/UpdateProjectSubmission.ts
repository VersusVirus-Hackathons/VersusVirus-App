/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProjectUpdateInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL mutation operation: UpdateProjectSubmission
// ====================================================

export interface UpdateProjectSubmission_updateOneProject_images {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface UpdateProjectSubmission_updateOneProject {
  __typename: "Project";
  id: string;
  description: string | null;
  technologiesUsed: string | null;
  obstacles: string | null;
  accomplishments: string | null;
  learnings: string | null;
  nextSteps: string | null;
  videoUrl: string | null;
  urls: string[];
  images: UpdateProjectSubmission_updateOneProject_images[];
}

export interface UpdateProjectSubmission {
  updateOneProject: UpdateProjectSubmission_updateOneProject | null;
}

export interface UpdateProjectSubmissionVariables {
  projectId?: string | null;
  data: ProjectUpdateInput;
}
