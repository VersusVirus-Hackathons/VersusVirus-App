import React from "react";
import styled from "styled-components";
import { GetSchedule_schedules, GetSchedule } from "../hooks/types/GetSchedule";
import moment from "moment";
import ExternalLinkIcon from "../../icons/components/ExternalLinkIcon";
import { ScheduleType } from "../../../types/global-types";
import BigLink from "../../core/components/BigLink";

import InternalBigLink from "../../core/components/InternalBigLink";

export interface ScheduleEntryProps {
  style?: {};
  className?: string;
  schedule: GetSchedule_schedules;
}
const Time = styled.p`
  font-size: 13px;
  line-height: 24px;
  font-weight: 600;
`;
const Title = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${(p) => p.color};
`;
const formatTime = (date: string) => moment(date).format("HH:mm");

const ExternalLinkAction = ({
  schedule,
  children,
}: {
  schedule: GetSchedule_schedules;
  children: any;
}) => (
  <BigLink href={schedule.data} target="_blank" icon={<ExternalLinkIcon />}>
    {children}
  </BigLink>
);

const parseInternalLinkData = (data: string): { href: string; as?: string } => {
  try {
    const { href, as } = JSON.parse(data);
    return { href, as };
  } catch (e) {}
  return { href: data };
};
const InternalLinkAction = ({
  schedule,
  children,
}: {
  schedule: GetSchedule_schedules;
  children: any;
}) => {
  try {
    const { href, as } = parseInternalLinkData(schedule.data);
    return (
      <InternalBigLink href={href} as={as}>
        {children}
      </InternalBigLink>
    );
  } catch (e) {
    return null;
  }
};

const ACTIONS: { [key in ScheduleType]: any } = {
  EXTERNAL_LINK: ExternalLinkAction,
  INTERNAL_LINK: InternalLinkAction,
};
const ScheduleEntry: React.FC<ScheduleEntryProps> = ({
  style,
  className,
  schedule,
}) => {
  const Action = ACTIONS[schedule.type];
  if (!Action) {
    return null;
  }
  return (
    <Action schedule={schedule}>
      <Time>
        {formatTime(schedule.from)} - {formatTime(schedule.to)}
      </Time>
      <Title color={schedule.color}>{schedule.title}</Title>
    </Action>
  );
};

export default ScheduleEntry;
