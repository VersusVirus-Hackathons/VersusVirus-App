/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Vote
// ====================================================

export interface Vote_voteForChallenge_team_challengesToSelectWithMyVotes_challenge {
  __typename: "Challenge";
  id: string;
}

export interface Vote_voteForChallenge_team_challengesToSelectWithMyVotes {
  __typename: "ChallengeWithMyVote";
  challenge: Vote_voteForChallenge_team_challengesToSelectWithMyVotes_challenge;
  myVote: number;
}

export interface Vote_voteForChallenge_team {
  __typename: "Team";
  id: string;
  challengesToSelectWithMyVotes: Vote_voteForChallenge_team_challengesToSelectWithMyVotes[];
}

export interface Vote_voteForChallenge {
  __typename: "VoteResult";
  team: Vote_voteForChallenge_team;
}

export interface Vote {
  voteForChallenge: Vote_voteForChallenge;
}

export interface VoteVariables {
  challengeId?: string | null;
  score?: number | null;
}
