import React from "react";
import styled from "styled-components";

interface BaseProps {
  odd: boolean;
}

const Base = styled.div<BaseProps>`
  display: flex;
  justify-content: space-between;
  color: #50555c;
  background-color: ${(p) => (p.odd ? "white" : "transparent")};
  padding: 20px;
`;

export interface ListBackgroundProps {
  style?: {};
  className?: string;
  children: React.ReactNode;
  odd?: boolean;
}

const ListBackground: React.FC<ListBackgroundProps> = ({
  style,
  className,
  children,
  odd = false,
}) => {
  return (
    <Base style={style} odd={odd} className={className}>
      {children}
    </Base>
  );
};

export default ListBackground;
