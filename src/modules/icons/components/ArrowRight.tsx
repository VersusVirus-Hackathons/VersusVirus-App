import React from "react";
import styled from "styled-components";

export interface ArrowRightProps {
  style?: {};
  className?: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ style, className }) => {
  return (
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 8.6c.6-.6 1.6-.6 2.3 0l9.7 9.8c.7.6.7 1.6 0 2.2l-9.7 9.8a1.6 1.6 0 11-2.3-2.3l8.6-8.6-8.6-8.6c-.7-.6-.7-1.7 0-2.3z"
        fill="#50555C"
      />
    </svg>
  );
};

export default ArrowRight;
