import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ProjectSubmission from "../ProjectSubmission";

storiesOf("project/ProjectSubmission", module).add("default view", () => (
  <ProjectSubmission />
));
