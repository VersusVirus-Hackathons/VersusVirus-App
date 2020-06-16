import React from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";
import { useStoreState, useStoreActions } from "../../../model";
import Hamburger from "../../icons/components/Hamburger";
import CloseIcon from "../../icons/components/CloseIcon";
import Link from "next/link";

const Base = styled.div`
  background-color: white;
`;

export interface HeaderProps {
  style?: {};
  className?: string;
  showHamburger?: boolean;
  isLogoLinked?: boolean;
}

const Logo = styled.img.attrs({
  src: "/logo.gif",
})`
  height: 40px;
  margin-top: 4px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
`;

const Header: React.FC<HeaderProps> = ({
  style,
  className,
  showHamburger = true,
  isLogoLinked = true,
}) => {
  const showNavigation = useStoreState((s) => s.layout.showNavigation);
  const setShowNavigation = useStoreActions((s) => s.layout.setShowNavigation);
  return (
    <Base style={style} className={className}>
      <ContentWrapper>
        <Inner>
          {isLogoLinked ? (
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          ) : (
            <Logo />
          )}
          {showHamburger ? (
            <div style={{ zIndex: 20 }}>
              {showNavigation ? (
                <CloseIcon onClick={() => setShowNavigation(false)} />
              ) : (
                <Hamburger onClick={() => setShowNavigation(true)} />
              )}
            </div>
          ) : null}
        </Inner>
      </ContentWrapper>
    </Base>
  );
};

export default Header;
