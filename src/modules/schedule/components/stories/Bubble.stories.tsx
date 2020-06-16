import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Bubble from "../Bubble";

storiesOf("schedule/Bubble", module).add("default view", () => <Bubble />);
