import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ContentPadding from "../ContentPadding";

storiesOf("layout/ContentPadding", module).add("default view", () => (
  <ContentPadding />
));
