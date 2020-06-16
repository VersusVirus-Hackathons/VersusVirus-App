import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ToggleBox from "../ToggleBox";

storiesOf("layout/ToggleBox", module).add("default view", () => (
  <ToggleBox title="some title">
    <p>Hello, i am content</p>
  </ToggleBox>
));
