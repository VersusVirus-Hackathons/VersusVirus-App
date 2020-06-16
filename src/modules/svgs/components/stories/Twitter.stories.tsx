import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Twitter from "../Twitter";

storiesOf("svgs/Twitter", module).add("default view", () => <Twitter />);
