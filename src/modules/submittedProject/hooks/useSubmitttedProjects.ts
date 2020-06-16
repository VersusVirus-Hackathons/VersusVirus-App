import { gql, useQuery } from "@apollo/client";
import { ProjectOverview } from "./../../../fragments/project";
import {
  SubmittedProjectsFiltered,
  SubmittedProjectsFilteredVariables,
} from "./types/SubmittedProjectsFiltered";

const FILTERED_QUERY = gql`
  query SubmittedProjectsFiltered($where: ProjectWhereInput!) {
    projects(where: $where) {
      ...ProjectOverview
    }
  }
  ${ProjectOverview}
`;

interface UseSubmittedProjectsProps {
  topicId: string;
}

const useSubmittedProjects = ({ topicId }: UseSubmittedProjectsProps) => {
  const { data, ...rest } = useQuery<
    SubmittedProjectsFiltered,
    SubmittedProjectsFilteredVariables
  >(FILTERED_QUERY, {
    variables: {
      where: topicId
        ? { challenge: { primaryTopic: { id: { equals: topicId } } } }
        : {},
    },
  });

  return {
    ...rest,
    data,
    submittedProjects: data?.projects,
  };
};

export default useSubmittedProjects;
