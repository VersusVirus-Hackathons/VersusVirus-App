import React from "react";
import styled from "styled-components";

const BASE_VALUE = 20;
const Spacer = styled.div`
  height: ${(p) => p.unit * BASE_VALUE}px;
`;

Spacer.defaultProps = {
  unit: 1,
};

export default Spacer;
