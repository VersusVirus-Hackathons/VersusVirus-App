import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import WelcomeMessage from "../WelcomeMessage";

storiesOf("user/WelcomeMessage", module).add("default view", () => (
  <WelcomeMessage />
));
