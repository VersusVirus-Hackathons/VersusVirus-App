import { storiesOf } from "@storybook/react"; // tslint:disable-line:no-implicit-dependencies
import React from "react";
// import { action } from "@storybook/addon-actions";
import ScheduleEntry from "../ScheduleEntry";
import { ScheduleType } from "../../../../types/global-types";

storiesOf("schedule/ScheduleEntry", module).add("default view", () => (
  <ScheduleEntry
    schedule={{
      __typename: "Schedule",
      color: "#ff0000",
      id: "some-id",
      from: "2020-03-04 09:00",
      to: "2020-03-04 11:00",
      title: "Some schedule entry",
      type: ScheduleType.EXTERNAL_LINK,
      data: "https://versusvirus.ch",
    }}
  />
));
