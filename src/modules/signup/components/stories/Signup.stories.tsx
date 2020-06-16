import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Signup from "../Signup";

storiesOf("signup/Signup", module).add("default view", () => (
  <Signup step="1" />
));
