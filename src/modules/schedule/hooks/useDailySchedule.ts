import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { GetSchedule, GetSchedule_schedules } from "./types/GetSchedule";
import moment from "moment";
const QUERY = gql`
  query GetSchedule {
    schedules(orderBy: { from: asc }) {
      id
      from
      to
      title
      type
      data
      color
    }
  }
`;

const useDailySchedule = () => {
  const { data, ...rest } = useQuery<GetSchedule>(QUERY, {
    pollInterval: 30000,
  });

  const schedules = data?.schedules;

  // group by day

  const dailySchedules = schedules?.reduce((dates, schedule) => {
    const day = moment(schedule.from).startOf("day").format();

    const todaysEntries = dates[day] ?? [];

    return {
      ...dates,
      [day]: [...todaysEntries, schedule],
    };
  }, {} as { [day: string]: GetSchedule_schedules[] });

  return {
    ...rest,
    dailySchedules,
  };
};

export default useDailySchedule;
