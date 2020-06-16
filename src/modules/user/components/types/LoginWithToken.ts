/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginWithToken
// ====================================================

export interface LoginWithToken_loginWithToken_user {
  __typename: "User";
  id: string;
}

export interface LoginWithToken_loginWithToken {
  __typename: "LoginResult";
  resumeToken: string;
  user: LoginWithToken_loginWithToken_user;
}

export interface LoginWithToken {
  loginWithToken: LoginWithToken_loginWithToken;
}

export interface LoginWithTokenVariables {
  email: string;
  token: string;
}
