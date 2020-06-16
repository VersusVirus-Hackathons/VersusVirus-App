import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import PageLayout from "../PageLayout";

storiesOf("layout/PageLayout", module).add("default view", () => (
  <PageLayout />
));
