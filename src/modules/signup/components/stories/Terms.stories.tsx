import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Terms from "../Terms";

storiesOf("signup/Terms", module).add("default view", () => <Terms />);
