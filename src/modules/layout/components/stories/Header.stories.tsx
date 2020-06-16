import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Header from "../Header";

storiesOf("layout/Header", module).add("default view", () => <Header />);
