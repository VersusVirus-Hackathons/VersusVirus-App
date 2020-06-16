import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { MyProject } from "./types/MyProject";
import { ProjectDetails } from "../../../fragments/project";
import { useState } from "react";

const QUERY = gql`
  query MyProject {
    me {
      id
      team {
        id
        challengeSelected {
          id
        }
        projects {
          ...ProjectDetails
        }
      }
    }
  }
  ${ProjectDetails}
`;

const useMyProject = () => {
  const [pollInterval, setPollInterval] = useState(1000);
  const { data, ...rest } = useQuery<MyProject>(QUERY, {
    ssr: false,
    pollInterval,
  });

  if (data?.me?.team?.projects?.length) {
    if (pollInterval !== 0) {
      setPollInterval(0);
    }
  }
  return {
    ...rest,
    data,
    teamId: data?.me?.team?.id,
    challengeId: data?.me?.team?.challengeSelected?.id,
    project: data?.me?.team?.projects[0],
  };
};

export default useMyProject;
