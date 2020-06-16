import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ConfirmEmail from "../ConfirmEmail";

storiesOf("user/ConfirmEmail", module).add("default view", () => (
  <ConfirmEmail />
));
