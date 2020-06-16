import gql from "graphql-tag";

export const MeFragment = gql`
  fragment Me on User {
    id
    firstname
    lastname
    roles {
      id
    }
    team {
      id
    }
    instagram
    linkedin
    twitter
    facebook
  }
`;

export const TeamMemberFragment = gql`
  fragment TeamMember on User {
    id
    firstname
    lastname

    hackerSkills {
      id
      title
    }
    hackerTypes {
      id
      title
    }
    linkedin
    instagram
    facebook
    twitter

    languages
  }
`;
