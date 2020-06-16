import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import DayBubble from "../DayBubble";

storiesOf("schedule/DayBubble", module)
  .add("active", () => <DayBubble date="2020-04-03" active />)
  .add("non active", () => <DayBubble active={false} date="2020-04-03" />);
