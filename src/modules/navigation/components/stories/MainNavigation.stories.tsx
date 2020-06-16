import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import MainNavigation from "../MainNavigation";

storiesOf("navigation/MainNavigation", module).add("default view", () => (
  <MainNavigation />
));
