import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import InternalBigLink from "../InternalBigLink";

storiesOf("core/InternalBigLink", module).add("default view", () => (
  <InternalBigLink href="/bla" />
));
