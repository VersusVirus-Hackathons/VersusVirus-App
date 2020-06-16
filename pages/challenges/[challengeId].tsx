import { useRouter } from "next/router";
import React from "react";
import ChallengeDetailsContainer from "../../src/modules/challenge/components/ChallengeDetailsContainer";
import PageLayout from "../../src/modules/layout/components/PageLayout";

export default () => {
  const { challengeId } = useRouter().query;
  return (
    <PageLayout>
      <ChallengeDetailsContainer challengeId={challengeId as string} />
    </PageLayout>
  );
};
