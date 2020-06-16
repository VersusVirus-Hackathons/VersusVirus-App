import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import MentorList from "../MentorList";

storiesOf("mentors/MentorList", module).add("default view", () => (
  <MentorList />
));
