import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { ProjectDetails } from "../../../fragments/project";
import { Project, ProjectVariables } from "./types/Project";

const QUERY = gql`
  query Project($projectId: String!) {
    project(where: { id: $projectId }) {
      ...ProjectDetails
    }
  }
  ${ProjectDetails}
`;

interface UseProjectProps {
  projectId: string;
}

const useProject = ({ projectId }: UseProjectProps) => {
  const { data, ...rest } = useQuery<Project, ProjectVariables>(QUERY, {
    variables: { projectId },
  });
  return {
    ...rest,
    data,
    project: data?.project,
  };
};

export default useProject;
