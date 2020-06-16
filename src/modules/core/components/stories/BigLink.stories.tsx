import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import BigLink from "../BigLink";

storiesOf("core/BigLink", module).add("default view", () => <BigLink />);
