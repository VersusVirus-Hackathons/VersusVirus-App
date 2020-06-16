import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  cursor: pointer;
`;

export interface HamburgerProps {
  style?: {};
  className?: string;
  onClick?: () => any;
}

const Hamburger: React.FC<HamburgerProps> = (props) => {
  return (
    <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" {...props}>
      <circle cx="27.5" cy="27.5" r="27.5" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 27c0-.7.6-1.3 1.3-1.3h22.4a1.2 1.2 0 110 2.6H16.8c-.6 0-1.2-.6-1.2-1.3zM15.5 19.5c0-.7.6-1.3 1.3-1.3h22.4a1.2 1.2 0 110 2.6H16.8c-.6 0-1.2-.6-1.2-1.3zM15.5 34.5c0-.7.6-1.3 1.3-1.3h22.4a1.2 1.2 0 110 2.5H16.8c-.6 0-1.2-.5-1.2-1.2z"
        fill="#000"
      />
    </Svg>
  );
};

export default Hamburger;
