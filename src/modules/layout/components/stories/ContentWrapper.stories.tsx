import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ContentWrapper from "../ContentWrapper";

storiesOf("layout/ContentWrapper", module).add("default view", () => (
  <ContentWrapper />
));
