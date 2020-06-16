/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterHackerInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL mutation operation: RegisterHacker
// ====================================================

export interface RegisterHacker_registerHacker {
  __typename: "RegisterResult";
  success: boolean;
}

export interface RegisterHacker {
  registerHacker: RegisterHacker_registerHacker;
}

export interface RegisterHackerVariables {
  data: RegisterHackerInput;
}
