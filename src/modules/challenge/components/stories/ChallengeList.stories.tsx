import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ChallengeList from "../ChallengeList";

storiesOf("challenge/ChallengeList", module).add("default view", () => (
  <ChallengeList />
));
