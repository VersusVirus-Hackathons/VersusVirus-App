import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  appearance: none;
  background: none;
  border: none;
  background: ${(p) => (p.disabled ? "#666" : "#e71d29")};
  border-radius: 7px;
  color: white;
  text-align: center;
  padding: 16px;

  font-size: 16px;
  text-decoration: none;
  cursor: ${(p) => (p.disabled ? "auto" : "pointer")};
  flex: 1;
  width: 100%;
`;

export interface ButtonProps {
  style?: {};
  className?: string;
}

export const LinkButton = styled(Button).attrs({ as: "a" })``;

export default Button;
