import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ProjectForm from "../ProjectForm";

storiesOf("project/ProjectForm", module).add("default view", () => (
  <ProjectForm />
));
