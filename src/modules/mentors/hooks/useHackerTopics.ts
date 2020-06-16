import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { HackerTopicsFragment } from "../../../fragments/hackerTopic";
import { GetHackerTopics } from "./types/GetHackerTopics";

const GET_TOPIC_QUERY = gql`
  query GetHackerTopics {
    hackerTopics {
      ...HackerTopicsFragment
    }
  }
  ${HackerTopicsFragment}
`;

const useHackerTopics = () => {
  const { data, ...rest } = useQuery<GetHackerTopics>(GET_TOPIC_QUERY);

  return {
    ...rest,
    data,
    hackerTopics: data?.hackerTopics,
  };
};

export default useHackerTopics;
