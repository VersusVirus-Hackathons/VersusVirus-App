import React from "react";
import styled from "styled-components";
import Bubble from "./Bubble";
import moment from "moment";

const Base = styled.div``;

export interface ComingSoonProps {
  style?: {};
  className?: string;
  date: string;
}

const Title = styled.span`
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 13px;
  line-height: 16px;
`;

const ComingSoon: React.FC<ComingSoonProps> = ({ style, className, date }) => {
  const dayAndMonth = moment(date).format("D.MMMM");

  return (
    <Bubble style={style} className={className} size={200} active>
      <Title>Starting Soon</Title>
      <Date>{dayAndMonth}</Date>
    </Bubble>
  );
};

export default ComingSoon;
