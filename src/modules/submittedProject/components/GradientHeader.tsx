import React from "react";
import styled from "styled-components";
import mediaQueries from "../../../utils/mediaQueries";

const Base = styled.div<{ backgroundColor: String }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 0%,
    ${(p) => p.backgroundColor} 100%
  );
  color: white;
  min-height: 250px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  ${mediaQueries.desktop`
    min-height: 500px;
  `}
`;

export interface GradientHeaderProps {
  style?: {};
  className?: string;
  backgroundColor?: string;
}

const GradientHeader: React.FC<GradientHeaderProps> = ({
  style,
  className,
  children,
  backgroundColor = "#ff0000",
}) => {
  return (
    <Base style={style} className={className} backgroundColor={backgroundColor}>
      {children}
    </Base>
  );
};

export default GradientHeader;
