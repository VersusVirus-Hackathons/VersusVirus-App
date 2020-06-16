import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ChallengeDetails } from "../../../fragments/types/ChallengeDetails";
import ContentPadding from "../../layout/components/ContentPadding";
import Heading from "../../layout/components/Heading";
import useChallenges from "../hooks/useChallenge";
import HackerTopicSelect from "../../mentors/components/HackerTopicSelect";
import InternalBigLink from "../../core/components/InternalBigLink";

const Base = styled.div``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 38px;
`;

const Text = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
`;

const ChallengesListWrapper = styled.div`
  padding-top: 33px;
`;

export interface ChallengeListProps {
  style?: {};
  className?: string;
}
const ChallengeListItem = ({ challenge }: { challenge: ChallengeDetails }) => {
  return (
    <InternalBigLink
      href="/challenges/[challengeId]"
      as={`/challenges/${challenge.id}`}
    >
      <Heading>{challenge.title}</Heading>
      <p>show details</p>
    </InternalBigLink>
  );
};
const ChallengeList: React.FC<ChallengeListProps> = ({ style, className }) => {
  const [topicId, setTopicId] = React.useState<string>("");
  const { challenges } = useChallenges({ topicId });

  return (
    <Base style={style} className={className}>
      <ContentPadding>
        <Title>Challenges</Title>
        <p>
          Here you can see all challenges and there are many, please be patient
          until this page is loaded completely.
        </p>
      </ContentPadding>
      <ContentPadding>
        <Text>Filter By Topic</Text>
        <HackerTopicSelect value={topicId} onChange={setTopicId} />

        <ChallengesListWrapper>
          {challenges?.map((challenge, index) => (
            <ChallengeListItem key={challenge.id} challenge={challenge} />
          ))}
        </ChallengesListWrapper>
      </ContentPadding>
    </Base>
  );
};

export default ChallengeList;
