import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Facebook from "../Facebook";

storiesOf("svgs/Facebook", module).add("default view", () => <Facebook />);
