import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Challenge from "../Challenge";

storiesOf("team/Challenge", module).add("default view", () => <Challenge />);
