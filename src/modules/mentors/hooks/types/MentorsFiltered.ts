/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MentorWhereInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL query operation: MentorsFiltered
// ====================================================

export interface MentorsFiltered_mentors {
  __typename: "Mentor";
  id: string;
  linkedin: string;
  name: string;
  skills: string;
  languages: string;
  email: string;
}

export interface MentorsFiltered {
  mentors: MentorsFiltered_mentors[];
}

export interface MentorsFilteredVariables {
  where: MentorWhereInput;
}
