import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Heading from "../Heading";

storiesOf("layout/Heading", module).add("default view", () => <Heading />);
