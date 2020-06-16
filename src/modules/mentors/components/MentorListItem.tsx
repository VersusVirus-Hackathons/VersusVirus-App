import React from "react";
import styled from "styled-components";

import ListBackground from "../../core/components/ListBackground";
import ListFullName from "../../core/components/ListFullName";
import ListText from "../../core/components/ListText";
import { Mentors_mentors } from "../hooks/types/Mentors";

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export interface MentorListItemProps {
  style?: {};
  className?: string;
  odd?: boolean;
  mentor: Mentors_mentors;
}

const MentorListItem: React.FC<MentorListItemProps> = ({
  style,
  className,
  odd = false,
  mentor,
}) => {
  return (
    <ListBackground style={style} odd={odd} className={className}>
      <FlexWrapper>
        <ListFullName>
          <span>{`${mentor.name} (${mentor.languages})`}</span>
        </ListFullName>
        <ListText>{`Skills: ${mentor.skills}`}</ListText>
      </FlexWrapper>
    </ListBackground>
  );
};

export default MentorListItem;
