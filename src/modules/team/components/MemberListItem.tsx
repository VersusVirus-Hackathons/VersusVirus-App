import React from "react";
import styled from "styled-components";
import Spacer from "../../layout/components/Spacer";
import ListBackground from "../../core/components/ListBackground";
import ListFullName from "../../core/components/ListFullName";
import ListText from "../../core/components/ListText";
import UserAvatar from "../../user/components/UserAvatar";
import { TeamMember } from "../../../fragments/types/TeamMember";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  padding-right: 6px;
`;

export interface MemberListItemProps {
  style?: {};
  className?: string;
  odd?: boolean;
  member: TeamMember;
  isMe?: boolean;
}

const MemberListItem: React.FC<MemberListItemProps> = ({
  style,
  className,
  odd = false,
  member,
  isMe,
}) => {
  return (
    <ListBackground style={style} odd={odd} className={className}>
      <FlexWrapper>
        <ListFullName>
          {`${member.firstname} ${member.lastname}`} {isMe ? "(you)" : ""}
        </ListFullName>
        <ListText>
          <Label>Languages:</Label>
          {member.languages.join(", ")}
        </ListText>
        <ListText>
          <Label>Skills:</Label>
          {member.hackerSkills.map((i) => i.title).join(", ")}
        </ListText>
      </FlexWrapper>
      <FlexWrapper>
        <UserAvatar userId={member.id} />
        <Spacer />
      </FlexWrapper>
    </ListBackground>
  );
};

export default MemberListItem;
