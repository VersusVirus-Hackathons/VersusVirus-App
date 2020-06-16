import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
import SubmittedProjectList from "../SubmittedProjectList";
// import { action } from "@storybook/addon-actions";

storiesOf("submittedProject/submittedProjectList", module).add(
  "default view",
  () => <SubmittedProjectList />,
);
