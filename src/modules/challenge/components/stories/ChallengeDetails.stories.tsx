import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ChallengeDetails from "../ChallengeDetails";
import { ChallengeDetails as ChallengeDetailsT } from "../../../../fragments/types/ChallengeDetails";

export const MOCK_CHALLENGE: ChallengeDetailsT = {
  __typename: "Challenge",
  challenge: "Some challenge",
  title: "Some challenge",
  context: "some context",
  id: "some-id",
  resources: "Some resources",
  solution: "Some solution",
};
storiesOf("challenge/ChallengeDetails", module).add("default view", () => (
  <ChallengeDetails challenge={MOCK_CHALLENGE} />
));
