/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendEmailToAllUser
// ====================================================

export interface SendEmailToAllUser_sendEmailToAllUser {
  __typename: "SendEmailToAllUserResult";
  emailsSent: number;
}

export interface SendEmailToAllUser {
  sendEmailToAllUser: SendEmailToAllUser_sendEmailToAllUser;
}

export interface SendEmailToAllUserVariables {
  subject: string;
  text?: string | null;
}
