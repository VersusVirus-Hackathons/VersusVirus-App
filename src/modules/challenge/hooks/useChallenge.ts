import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { ChallengeDetailsFragment } from "../../../fragments/challenge";
import { Challenges, ChallengesVariables } from "./types/Challenges";

const QUERY = gql`
  query Challenges($where: ChallengeWhereInput!) {
    challenges(where: $where) {
      ...ChallengeDetails
    }
  }
  ${ChallengeDetailsFragment}
`;

const useChallenges = ({ topicId }: { topicId: string }) => {
  const { data, ...rest } = useQuery<Challenges, ChallengesVariables>(QUERY, {
    variables: {
      where: topicId ? { primaryTopic: { id: { equals: topicId } } } : {},
    },
  });

  return {
    ...rest,
    data,
    challenges: data?.challenges,
  };
};

export default useChallenges;
