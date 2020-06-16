/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TeamMember
// ====================================================

export interface TeamMember_hackerSkills {
  __typename: "HackerSkill";
  id: string;
  title: string;
}

export interface TeamMember_hackerTypes {
  __typename: "HackerType";
  id: string;
  title: string;
}

export interface TeamMember {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
  hackerSkills: TeamMember_hackerSkills[];
  hackerTypes: TeamMember_hackerTypes[];
  linkedin: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
  languages: string[];
}
