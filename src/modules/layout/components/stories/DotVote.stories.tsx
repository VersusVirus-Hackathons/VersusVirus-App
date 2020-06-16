import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
import { action } from "@storybook/addon-actions";
import DotVote from "../DotVote";

storiesOf("layout/DotVote", module).add("default view", () => (
  <DotVote value={1} onChange={action("onChange")} />
));
