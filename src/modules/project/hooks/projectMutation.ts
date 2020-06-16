import gql from "graphql-tag";
import { ProjectDetails } from "../../../fragments/project";

export const CreateProjectMutation = gql`
  mutation CreateProject($data: ProjectCreateInput!) {
    createOneProject(data: $data) {
      ...ProjectDetails
    }
  }
  ${ProjectDetails}
`;

export const UpdateProjectMutation = gql`
  mutation UpdateProject($projectId: String, $data: ProjectUpdateInput!) {
    updateOneProject(where: { id: $projectId }, data: $data) {
      ...ProjectDetails
    }
  }
  ${ProjectDetails}
`;
