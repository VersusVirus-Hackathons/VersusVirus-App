/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Me
// ====================================================

export interface Me_roles {
  __typename: "UserRole";
  id: string;
}

export interface Me_team {
  __typename: "Team";
  id: string;
}

export interface Me {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
  roles: Me_roles[];
  team: Me_team | null;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
}
