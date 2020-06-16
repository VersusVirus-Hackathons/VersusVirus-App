import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import NextButton from "../NextButton";

storiesOf("signup/NextButton", module).add("default view", () => (
  <NextButton step="2" />
));
