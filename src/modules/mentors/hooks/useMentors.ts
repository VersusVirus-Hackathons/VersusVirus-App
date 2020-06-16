import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Mentors } from "./types/Mentors";
import { MentorsFragment } from "../../../fragments/mentors";
import {
  MentorsFiltered,
  MentorsFilteredVariables,
} from "./types/MentorsFiltered";

const QUERY = gql`
  query Mentors {
    mentors {
      ...MentorsFragment
    }
  }
  ${MentorsFragment}
`;

const FILTERED_QUERY = gql`
  query MentorsFiltered($where: MentorWhereInput!) {
    mentors(where: $where) {
      ...MentorsFragment
    }
  }
  ${MentorsFragment}
`;

interface UseMentorsProps {
  topicId: string;
}

const useMentors = ({ topicId }: UseMentorsProps) => {
  const { data, ...rest } = useQuery<MentorsFiltered, MentorsFilteredVariables>(
    FILTERED_QUERY,
    {
      variables: {
        where: topicId ? { topics: { some: { id: { equals: topicId } } } } : {},
      },
    },
  );

  return {
    ...rest,
    data,
    mentors: data?.mentors,
  };
};

export default useMentors;
