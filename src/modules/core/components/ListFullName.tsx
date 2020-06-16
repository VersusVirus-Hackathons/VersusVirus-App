import React from "react";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export interface ListFullNameProps {
  style?: {};
  className?: string;
  children: React.ReactNode;
}

const ListFullName: React.FC<ListFullNameProps> = ({
  style,
  className,
  children,
}) => {
  return (
    <Base style={style} className={className}>
      {children}
    </Base>
  );
};

export default ListFullName;
