import prisma from "../prisma/prisma";
import { ScheduleCreateInput, ScheduleType } from "@prisma/client";
import moment from "moment";

const SCHEDULES_TO_SEED: ScheduleCreateInput[] = [
  {
    title: "Teambuilding Session",
    from: "2020-04-03T10:00:00.000+02:00",
    to: "2020-04-03T12:00:00.000+02:00",
    type: ScheduleType.EXTERNAL_LINK,
    data: "https://versusvirus.slack.com/",
  },
  {
    title: "Celebration",
    from: "2020-04-05T18:30:00.000+02:00",
    to: "2020-04-05T22:00:00.000+02:00",
    type: ScheduleType.EXTERNAL_LINK,
    data: "",
  },
].map((e) => ({
  ...e,
  from: moment(e.from).toDate(),
  to: moment(e.to).toDate(),
}));

export default async () => {
  for (let schedule of SCHEDULES_TO_SEED) {
    await prisma.schedule.upsert({
      where: {
        from_to: {
          from: schedule.from,
          to: schedule.to,
        },
      },
      create: schedule,
      update: {},
    });
  }
};
