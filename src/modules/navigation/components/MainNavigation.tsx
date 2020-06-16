import React from "react";
import styled from "styled-components";
import InternalBigLink from "../../core/components/InternalBigLink";
import BigLink from "../../core/components/BigLink";
import useLogout from "../../user/hooks/useLogout";
import useMe from "../../user/hooks/useMe";
import { useStoreActions } from "../../../model";
import ContentWrapper from "../../layout/components/ContentWrapper";
import { useRouter } from "next/router";

const Base = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-color: #dbdbdb;
  z-index: 10;
  padding: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export interface MainNavigationProps {
  style?: {};
  className?: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({
  style,
  className,
}) => {
  const { me, isAdmin } = useMe();
  const logout = useLogout();
  const router = useRouter();

  const setShowNavigation = useStoreActions((s) => s.layout.setShowNavigation);
  return (
    <Base
      style={style}
      className={className}
      onClick={() => setShowNavigation(false)}
    >
      <ContentWrapper>
        <InternalBigLink href="/">Home</InternalBigLink>
        {me?.team ? <InternalBigLink href="/team">Team</InternalBigLink> : null}
        <InternalBigLink href="/mentors">Mentors</InternalBigLink>
        <InternalBigLink href="/challenges">Challenges</InternalBigLink>
        {isAdmin ? (
          <InternalBigLink href="/admin">Administration</InternalBigLink>
        ) : null}
        {me ? (
          <BigLink
            onClick={async () => {
              await logout();
              router.reload();
            }}
          >
            Log out
          </BigLink>
        ) : null}
      </ContentWrapper>
    </Base>
  );
};

export default MainNavigation;
