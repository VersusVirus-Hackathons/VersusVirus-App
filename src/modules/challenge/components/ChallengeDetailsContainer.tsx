import React from "react";
import styled from "styled-components";
import ChallengeDetails from "./ChallengeDetails";
import { ChallengeDetailsFragment } from "../../../fragments/challenge";
import { useQuery, gql } from "@apollo/client";
import { ChallengeById, ChallengeByIdVariables } from "./types/ChallengeById";
import BackLink from "../../core/components/BackLink";
import ArrowLeft from "../../icons/components/ArrowLeft";
import Spacer from "../../layout/components/Spacer";

export interface ChallengeDetailsContainerProps {
  challengeId: string;
}

const ChallengeDetailsContainer: React.FC<ChallengeDetailsContainerProps> = ({
  challengeId,
}) => {
  const { data, loading, error } = useQuery<
    ChallengeById,
    ChallengeByIdVariables
  >(
    gql`
      query ChallengeById($challengeId: String!) {
        challenge(where: { id: $challengeId }) {
          ...ChallengeDetails
        }
      }
      ${ChallengeDetailsFragment}
    `,
    { variables: { challengeId } },
  );
  return data?.challenge ? (
    <React.Fragment>
      <ChallengeDetails challenge={data.challenge} />
      <Spacer />
      <BackLink href="/challenges" icon={<ArrowLeft />}>
        Back to challenges
      </BackLink>
    </React.Fragment>
  ) : loading ? (
    <p>loading</p>
  ) : (
    <p>sorry, not found</p>
  );
};

export default ChallengeDetailsContainer;
