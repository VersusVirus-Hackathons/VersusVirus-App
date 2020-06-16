import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
import { action } from "@storybook/addon-actions";
import HackerTopicSelect from "../HackerTopicSelect";

storiesOf("mentors/HackerTopicSelect", module).add("default view", () => (
  <HackerTopicSelect onChange={action("onChange")} />
));
