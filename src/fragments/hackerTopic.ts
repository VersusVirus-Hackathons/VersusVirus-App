import gql from "graphql-tag";

export const HackerTopicsFragment = gql`
  fragment HackerTopicsFragment on HackerTopic {
    id
    title
    description
    slack {
      url
    }
  }
`;
