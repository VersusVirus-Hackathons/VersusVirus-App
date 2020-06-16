/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChallengeById
// ====================================================

export interface ChallengeById_challenge {
  __typename: "Challenge";
  id: string;
  title: string;
  context: string;
  challenge: string;
  solution: string | null;
  resources: string | null;
}

export interface ChallengeById {
  challenge: ChallengeById_challenge | null;
}

export interface ChallengeByIdVariables {
  challengeId: string;
}
