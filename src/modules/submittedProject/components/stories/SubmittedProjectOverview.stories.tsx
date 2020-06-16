import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import SubmittedProjectOverview from "../SubmittedProjectOverview";

storiesOf(
  "submittedProject/submittedProjectOverview",
  module,
).add("default view", () => (
  <SubmittedProjectOverview
    title="title"
    topic="topic"
    tagline="tagline"
    color="#ff0000"
    backgroundColor="#0000ff"
  />
));
