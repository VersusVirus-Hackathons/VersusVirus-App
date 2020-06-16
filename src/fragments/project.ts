import gql from "graphql-tag";

export const ProjectDetails = gql`
  fragment ProjectDetails on Project {
    id
    title
    tagline
    thumbnail {
      id
      base64
    }
    description
    technologiesUsed
    obstacles
    accomplishments
    learnings
    nextSteps
    videoUrl
    urls
    images {
      id
      base64
    }
    isPublished
    relevanceToHackathon
    relevanceToChallenge
    longTermImpact
    progressDuringHackathon
    valueAdded
    challenge {
      id
      primaryTopic {
        id
        title
      }
    }
  }
`;

export const ProjectOverview = gql`
  fragment ProjectOverview on Project {
    id
    title
    tagline
    thumbnail {
      id
      base64
    }
    challenge {
      id
      primaryTopic {
        id
        title
      }
    }
  }
`;
