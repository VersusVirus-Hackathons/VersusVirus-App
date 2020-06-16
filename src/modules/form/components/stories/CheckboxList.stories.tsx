import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
import { action } from "@storybook/addon-actions";
import CheckboxList from "../CheckboxList";

storiesOf("form/CheckboxList", module).add("default view", () => (
  <CheckboxList
    value={["option1"]}
    onChange={action("onChange")}
    options={[
      { title: "option 1", description: "option 1 description", id: "option1" },
      { title: "option 2", description: "option 2 description", id: "option2" },
    ]}
  />
));
