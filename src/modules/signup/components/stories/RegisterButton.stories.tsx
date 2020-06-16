import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import RegisterButton from "../RegisterButton";

storiesOf("signup/RegisterButton", module).add("default view", () => (
  <RegisterButton />
));
