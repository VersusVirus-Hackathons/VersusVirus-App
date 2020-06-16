/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengeWhereInput } from "./../../../../types/global-types";

// ====================================================
// GraphQL query operation: Challenges
// ====================================================

export interface Challenges_challenges {
  __typename: "Challenge";
  id: string;
  title: string;
  context: string;
  challenge: string;
  solution: string | null;
  resources: string | null;
}

export interface Challenges {
  challenges: Challenges_challenges[];
}

export interface ChallengesVariables {
  where: ChallengeWhereInput;
}
