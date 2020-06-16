import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ProjectDetail from "../ProjectDetail";

storiesOf("project/ProjectDetail", module).add("default view", () => (
  <ProjectDetail projectId="someid" />
));
