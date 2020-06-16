import React from "react";
import styled from "styled-components";
import moment from "moment";
import Bubble from "./Bubble";

export interface DayBubbleProps {
  style?: {};
  className?: string;
  active: boolean;
  date: string;
  onClick?: () => void;
}

const Day = styled.span`
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 13px;
  line-height: 16px;
`;

const DayBubble: React.FC<DayBubbleProps> = ({
  style,
  className,
  active,
  date,
  onClick,
}) => {
  const theMoment = moment(date);
  const weekday = theMoment.format("dd");
  const dayAndMonth = theMoment.format("D.MMMM");

  return (
    <Bubble
      style={style}
      className={className}
      size={96}
      active={active}
      onClick={onClick}
    >
      <Day>{weekday}</Day>
      <Date>{dayAndMonth}</Date>
    </Bubble>
  );
};

export default DayBubble;
