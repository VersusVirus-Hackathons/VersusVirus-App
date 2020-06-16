import React, { Fragment } from "react";
import styled from "styled-components";
import ChallengeDetails from "../../challenge/components/ChallengeDetails";
import Heading from "../../layout/components/Heading";
import Spacer from "../../layout/components/Spacer";
import useMyTeam from "../../user/hooks/useMyTeam";
import ChallengeVoteListItem from "./ChallengeVoteListItem";
import InternalBigLink from "../../core/components/InternalBigLink";
import ContentPadding from "../../layout/components/ContentPadding";

const Base = styled.div``;

export interface ChallengeProps {
  style?: {};
  className?: string;
}
const VoteSummary = styled.div`
  font-weight: bold;
  padding: 20px;
`;

const Info = styled.p`
  padding-top: 24px;
  padding-bottom: 24px;
  color: green;
  font-weight: 600;
`;

const Challenge: React.FC<ChallengeProps> = ({ style, className }) => {
  const { myTeam } = useMyTeam();

  if (!myTeam) {
    return <p>You don't have a team yet</p>;
  }
  if (myTeam.challengeSelected) {
    return (
      <>
        <ContentPadding>
          <Heading>Your challenge</Heading>
          <Spacer unit={2} />
          <ChallengeDetails challenge={myTeam.challengeSelected} />
        </ContentPadding>
      </>
    );
  }
  const totalVoteCount = myTeam.challengesToSelectWithMyVotes.reduce(
    (acc, c) => c.myVote + acc,
    0,
  );
  return (
    <Base style={style} className={className}>
      <p>
        You will vote on which challenges you think are best by using dots. Each
        team member gets 6 dots to vote with with a limit of 3 dots for a
        challenge. Therefore you can vote 3 dots (first choice), 2 dots (second
        choice) and 1 dots (third choice). Once all members have distributed
        their dots, we will proceed with choosing the challenge that received
        the most dots.
      </p>

      <Info>Your vote is saved/update automatically no action needed</Info>

      <VoteSummary>{totalVoteCount} / 6 Votes given</VoteSummary>

      {myTeam.challengesToSelectWithMyVotes.map(({ challenge, myVote }) => (
        <Fragment key={challenge.id}>
          <ChallengeVoteListItem
            challenge={challenge}
            myVote={myVote}
            canVote={totalVoteCount < 6}
          />
          <Spacer unit={2} />
        </Fragment>
      ))}
    </Base>
  );
};

export default Challenge;
