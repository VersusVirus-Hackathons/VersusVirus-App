import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Schedule from "../Schedule";

storiesOf("schedule/Schedule", module).add("default view", () => <Schedule />);
