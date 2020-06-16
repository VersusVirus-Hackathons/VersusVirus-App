import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
import { action } from "@storybook/addon-actions";
import CheckboxListItem from "../CheckboxListItem";

storiesOf("form/CheckboxListItem", module).add("default view", () => (
  <CheckboxListItem
    onClick={action("onClick")}
    checked
    title="Some title"
    description="some Description"
  />
));
