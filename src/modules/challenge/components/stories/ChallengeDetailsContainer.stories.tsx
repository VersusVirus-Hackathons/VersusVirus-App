import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ChallengeDetailsContainer from "../ChallengeDetailsContainer";

storiesOf("challenge/ChallengeDetailsContainer", module).add(
  "default view",
  () => <ChallengeDetailsContainer challengeId="someid" />,
);
