import React from "react";
import styled from "styled-components";
import ArrowDown from "./ArrowDown";

export interface ArrowUpProps {
  style?: {};
  className?: string;
}

const ArrowUp = styled(ArrowDown)`
  transform: scaleY(-1);
`;

export default ArrowUp;
