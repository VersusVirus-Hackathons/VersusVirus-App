import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import Button from "../Button";

storiesOf("core/Button", module).add("default view", () => <Button />);
