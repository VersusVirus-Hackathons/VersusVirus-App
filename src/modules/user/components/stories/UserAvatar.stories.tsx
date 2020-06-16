import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import UserAvatar from "../UserAvatar";

storiesOf("User/UserAvatar", module).add("default view", () => (
  <UserAvatar userId="someid" />
));
