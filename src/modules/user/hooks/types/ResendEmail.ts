/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResendEmail
// ====================================================

export interface ResendEmail_resendVerificationEmail {
  __typename: "ResendVerificationEmailResult";
  success: boolean;
}

export interface ResendEmail {
  resendVerificationEmail: ResendEmail_resendVerificationEmail;
}

export interface ResendEmailVariables {
  email: string;
}
