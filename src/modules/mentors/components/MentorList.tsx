import React from "react";
import styled from "styled-components";
import useMentors from "../hooks/useMentors";
import MentorListItem from "./MentorListItem";
import { Select, MenuItem, Button } from "@material-ui/core";
import useHackerTopics from "../hooks/useHackerTopics";
import { useEffect } from "react";
import HackerTopicSelect from "./HackerTopicSelect";
import { LinkButton } from "../../core/components/Button";
import Spacer from "../../layout/components/Spacer";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const hasSlack = publicRuntimeConfig?.SLACK_SIGNUP_URL;

const Base = styled.div``;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
`;

const MemberListWrapper = styled.div`
  padding-top: 33px;
`;

export interface MentorListProps {
  style?: {};
  className?: string;
}

const MentorList: React.FC<MentorListProps> = ({ style, className }) => {
  const [topicId, setTopicId] = React.useState<string>("");
  const { mentors, loading } = useMentors({ topicId });
  const { hackerTopics } = useHackerTopics();

  const selectedTopic = hackerTopics?.find((t) => t.id == topicId);

  return (
    <Base style={style} className={className}>
      <Title>Mentors</Title>
      <Text>For contacting mentors in Slack, please choose a topic below.</Text>
      {hasSlack && selectedTopic?.slack?.url ? (
        <>
          <LinkButton href={selectedTopic?.slack?.url} target="_blank">
            Show ”{selectedTopic.title}“ in Slack
          </LinkButton>
          <Spacer unit={1} />
        </>
      ) : null}
      <HackerTopicSelect value={topicId} onChange={setTopicId} />
      <MemberListWrapper>
        {mentors?.map((mentor, index) => (
          <MentorListItem
            key={mentor.id}
            mentor={mentor}
            odd={index % 2 === 0}
          />
        ))}
      </MemberListWrapper>
    </Base>
  );
};

export default MentorList;
