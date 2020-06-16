import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ChallengeVoteListItem from "../ChallengeVoteListItem";
import { MOCK_CHALLENGE } from "../../../challenge/components/stories/ChallengeDetails.stories";

storiesOf("team/ChallengeVoteListItem", module).add("default view", () => (
  <ChallengeVoteListItem canVote={true} myVote={2} challenge={MOCK_CHALLENGE} />
));
