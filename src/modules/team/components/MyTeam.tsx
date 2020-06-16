import React from "react";
import styled from "styled-components";
import { LinkButton } from "../../core/components/Button";
import ContentPadding from "../../layout/components/ContentPadding";
import useMyTeam from "../../user/hooks/useMyTeam";
import MemberListItem from "./MemberListItem";
import Spacer from "../../layout/components/Spacer";

const Base = styled.div``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export interface MyTeamProps {
  style?: {};
  className?: string;
}

const MyTeam: React.FC<MyTeamProps> = ({ style, className }) => {
  const { me, myTeam, loading } = useMyTeam();

  if (!myTeam || loading) {
    return null;
  }

  return (
    <Base style={style} className={className}>
      <ContentPadding>
        <Title>Your Team</Title>
        {myTeam?.slack ? (
          <>
            <Spacer unit={1} />
            <LinkButton href={myTeam?.slack.url} target="_blank">
              Team channel on Slack
            </LinkButton>
            <Spacer unit={1} />
          </>
        ) : null}
        {myTeam?.id ? (
          <>
            <Spacer unit={1} />
            <p>The name of your team is {myTeam.id}.</p>
            <Spacer unit={1} />
          </>
        ) : null}
        <h2>Members:</h2>
      </ContentPadding>
      <div>
        {[...myTeam?.members]
          .sort((m) => (m.id === me?.id ? -1 : 1))
          .map((member, index) => (
            <MemberListItem
              key={member.id}
              member={member}
              odd={index % 2 === 0}
              isMe={member.id === me?.id}
            />
          ))}
      </div>
    </Base>
  );
};

export default MyTeam;
