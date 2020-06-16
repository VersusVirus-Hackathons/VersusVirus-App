import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import MyTeam from "../MyTeam";

storiesOf("team/MyTeam", module).add("default view", () => <MyTeam />);
