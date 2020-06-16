import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
import { action } from "@storybook/addon-actions";
import ImageField from "../ImageField";

storiesOf("form/ImageField", module).add("default view", () => (
  <ImageField onChange={action("onChange")} />
));
