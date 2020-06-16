import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Home from "../Home";

storiesOf("home/Home", module).add("default view", () => <Home />);
