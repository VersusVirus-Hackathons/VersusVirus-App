import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  cursor: pointer;
`;

export interface CloseIconProps {
  style?: {};
  className?: string;
  onClick?: () => any;
}

const CloseIcon: React.FC<CloseIconProps> = (props) => {
  return (
    <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" {...props}>
      <circle cx="27.5" cy="27.5" r="27.5" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 17.4c.6.6.6 1.5 0 2L19.5 37a1.5 1.5 0 01-2-2l17.4-17.6c.6-.5 1.5-.5 2 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 17.4c.6-.5 1.5-.5 2 0L37 35a1.5 1.5 0 01-2 2L17.3 19.6c-.5-.6-.5-1.5 0-2z"
        fill="#000"
      />
    </Svg>
  );
};

export default CloseIcon;
