import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Base = styled(Button)`
  flex: none;
  display: flex;
  width: 89px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 6px;
`;

export interface ConnectButtonProps {
  style?: {};
  className?: string;
  children: React.ReactNode;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({
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

export default ConnectButton;
