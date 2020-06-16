import gql from "graphql-tag";

export const ChallengeDetailsFragment = gql`
  fragment ChallengeDetails on Challenge {
    id
    title
    context
    challenge
    solution
    resources
  }
`;
