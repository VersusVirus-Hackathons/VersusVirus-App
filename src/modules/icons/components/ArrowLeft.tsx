import React from "react";
import styled from "styled-components";

export interface ArrowLeftProps {
  style?: {};
  className?: string;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ style, className }) => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
        fill="#50555C"
      />
    </svg>
  );
};

export default ArrowLeft;
