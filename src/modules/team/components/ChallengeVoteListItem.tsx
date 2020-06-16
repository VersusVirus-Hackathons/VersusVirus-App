import React, { Fragment } from "react";
import styled from "styled-components";
import { ChallengeDetails as ChallengeDetailsT } from "../../../fragments/types/ChallengeDetails";
import Spacer from "../../layout/components/Spacer";
import DotVote from "../../layout/components/DotVote";
import { useMutation, gql } from "@apollo/client";
import { Vote, VoteVariables } from "./types/Vote";
import ToggleBox from "../../layout/components/ToggleBox";

import ChallengeDetails from "../../challenge/components/ChallengeDetails";

const Base = styled.div``;

const RedText = styled.span`
  color: red;
`;

export interface ChallengeVoteListItemProps {
  challenge: ChallengeDetailsT;
  myVote: number;
  canVote: boolean;
}

const VoteWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ChallengeVoteListItem: React.FC<ChallengeVoteListItemProps> = ({
  challenge,
  myVote,
  canVote,
}) => {
  const [vote] = useMutation<Vote, VoteVariables>(gql`
    mutation Vote($challengeId: String, $score: Int) {
      voteForChallenge(challengeId: $challengeId, score: $score) {
        team {
          id
          challengesToSelectWithMyVotes {
            challenge {
              id
            }
            myVote
          }
        }
      }
    }
  `);
  return (
    <Base>
      <ToggleBox
        title={
          <>
            {challenge.title} (Your vote: {myVote})
          </>
        }
      >
        <VoteWrapper>
          <span style={{ marginRight: 10 }}>Vote now: </span>
          <DotVote
            value={myVote}
            onChange={(v) =>
              vote({
                variables: {
                  challengeId: challenge.id,
                  score: v,
                },
              })
            }
          />{" "}
          {!canVote ? (
            <RedText>You reached the maximum of 6 votes</RedText>
          ) : null}
        </VoteWrapper>

        <Spacer />
        <Spacer />
        <ChallengeDetails challenge={challenge} />
      </ToggleBox>
    </Base>
  );
};

export default ChallengeVoteListItem;
