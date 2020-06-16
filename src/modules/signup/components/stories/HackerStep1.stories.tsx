import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import HackerStep1 from "../Profile";

storiesOf("signup/HackerStep1", module).add("default view", () => (
  <HackerStep1 />
));
