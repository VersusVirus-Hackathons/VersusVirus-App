import gql from "graphql-tag";

export const MentorsFragment = gql`
  fragment MentorsFragment on Mentor {
    id
    linkedin
    name
    skills
    languages
    email
  }
`;
