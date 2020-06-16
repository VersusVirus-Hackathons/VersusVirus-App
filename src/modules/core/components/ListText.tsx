import React from "react";
import styled from "styled-components";

const Base = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 24px;
`;

export interface ListTextProps {
  style?: {};
  className?: string;
  children: React.ReactNode;
}

const ListText: React.FC<ListTextProps> = ({ style, className, children }) => {
  return (
    <Base style={style} className={className}>
      {children}
    </Base>
  );
};

export default ListText;
