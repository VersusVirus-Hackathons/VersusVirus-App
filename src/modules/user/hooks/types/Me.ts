/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_roles {
  __typename: "UserRole";
  id: string;
}

export interface Me_me_team {
  __typename: "Team";
  id: string;
}

export interface Me_me {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
  roles: Me_me_roles[];
  team: Me_me_team | null;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
}

export interface Me {
  me: Me_me | null;
}
