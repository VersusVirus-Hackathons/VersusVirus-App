import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ComingSoon from "../ComingSoon";

storiesOf("schedule/ComingSoon", module).add("default view", () => (
  <ComingSoon date="2020-04-03" />
));
