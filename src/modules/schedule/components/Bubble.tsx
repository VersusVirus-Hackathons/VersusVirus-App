import React from "react";
import styled from "styled-components";

export const Bubble = styled.div<{ active: boolean; size: number }>`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  background-color: ${(p) => (p.active ? "#e71d29" : "transparent")};
  color: ${(p) => (p.active ? "white" : "#e71d29")};
  opacity: ${(p) => (p.active ? "1" : "0.6")};
  border: ${(p) => (p.active ? "none" : "3px dashed")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  flex-direction: column;
  cursor: pointer;
`;

export default Bubble;
