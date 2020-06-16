import React, { useState } from "react";
import styled from "styled-components";
import ArrowUp from "../../icons/components/ArrowUp";
import ArrowDown from "../../icons/components/ArrowDown";

const Base = styled.div``;

export interface ToggleBoxProps {
  style?: {};
  className?: string;
  title: React.ReactNode;
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #babcbf;

  padding: 20px;
`;

const TitleContent = styled.div``;

const Content = styled.div`
  padding: 20px;
  overflow: auto;
`;

const ToggleBox: React.FC<ToggleBoxProps> = ({
  style,
  className,
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Base style={style} className={className}>
      <Title onClick={() => setOpen(!open)}>
        <TitleContent>{title}</TitleContent>
        {open ? <ArrowUp /> : <ArrowDown />}
      </Title>
      {open ? <Content>{children}</Content> : null}
    </Base>
  );
};

export default ToggleBox;
