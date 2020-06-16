import React from "react";
import styled from "styled-components";

import useDailySchedule from "../hooks/useDailySchedule";
import { GetSchedule_schedules } from "../hooks/types/GetSchedule";
import moment from "moment";
import DayBubble from "./DayBubble";
import Spacer from "../../layout/components/Spacer";
import ComingSoon from "./ComingSoon";
import { useRouter } from "next/router";
import ScheduleEntry from "./ScheduleEntry";
const Base = styled.div``;

export interface ScheduleProps {
  style?: {};
  className?: string;
}

const ScheduleDay = ({ schedules }: { schedules: GetSchedule_schedules[] }) => {
  return (
    <div>
      {schedules.map((schedule) => (
        <ScheduleEntry key={schedule.id} schedule={schedule} />
      ))}
    </div>
  );
};

const DayBubbles = styled.div`
  display: flex;

  & > * {
    margin-right: 20px;
  }
`;

const Schedule: React.FC<ScheduleProps> = ({ style, className }) => {
  const { dailySchedules } = useDailySchedule();

  const router = useRouter();
  const { query } = router;
  const { referenceDate } = query; // for debugging

  if (!dailySchedules || Object.keys(dailySchedules).length === 0) return null;
  const referenceMoment = referenceDate ? moment(referenceDate) : moment();
  const days = Object.keys(dailySchedules).map((date) => ({
    date,
    isToday: referenceMoment.isSame(date, "day"),
  }));
  const firstDate = days[0].date;
  const todayDate = days.find((d) => d.isToday)?.date;
  const todaySchedule = dailySchedules[todayDate] ?? [];
  const weekBeforeFirst = moment(firstDate).subtract(7, "days");
  const notYetStarted = referenceMoment.isBefore(weekBeforeFirst);
  return (
    <Base style={style} className={className}>
      {notYetStarted ? (
        <ComingSoon date={firstDate} style={{ margin: "auto" }} />
      ) : (
        <>
          <DayBubbles>
            {days.map(({ date, isToday }) => {
              return (
                <DayBubble
                  date={date}
                  key={date}
                  active={isToday}
                  onClick={() => {
                    router.push({
                      pathname: router.route,
                      // href: router.route,

                      query: {
                        referenceDate: date,
                      },
                    });
                  }}
                />
              );
            })}
          </DayBubbles>
          <Spacer />

          {todayDate ? <ScheduleDay schedules={todaySchedule} /> : null}
          <Spacer />
        </>
      )}
    </Base>
  );
};

export default Schedule;
