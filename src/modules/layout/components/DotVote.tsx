import React from "react";
import styled from "styled-components";
import times from "lodash/times";

const Base = styled.div`
  display: flex;
  & > * {
    margin-right: 8px;
  }
  flex-direction: row;
  margin-right: auto;

  flex: 1;
`;

export interface DotVoteProps {
  style?: {};
  className?: string;
  max?: number;
  value?: number;
  onChange: (n: number) => void;
}

const Dot = styled.div<{ active: boolean }>`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #ff0000;
  background-color: ${(p) => (p.active ? "#ff0000" : "transparent")};
  border: 1px solid;
  &:hover {
    opacity: 0.8;
  }
`;
const DotVote: React.FC<DotVoteProps> = ({
  style,
  className,
  max = 3,
  value = 0,
  onChange,
}) => {
  return (
    <Base style={style} className={className}>
      {times(max).map((i) => {
        const active = i < value;

        return (
          <Dot
            key={i}
            active={active}
            onClick={(e) => {
              e.stopPropagation();
              const dotScore = i + 1;
              const newValue = dotScore === value ? dotScore - 1 : dotScore;
              onChange(newValue);
            }}
          />
        );
      })}
    </Base>
  );
};

export default DotVote;
