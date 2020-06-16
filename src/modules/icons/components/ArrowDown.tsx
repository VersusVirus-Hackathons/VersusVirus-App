import React from "react";
import styled from "styled-components";

export interface ArrowDownProps {
  style?: {};
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ style, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.3 8.3a1 1 0 011.4 0l5.3 5.3 5.3-5.3a1 1 0 111.4 1.4l-6 6a1 1 0 01-1.4 0l-6-6a1 1 0 010-1.4z"
        fill="#50555C"
      />
    </svg>
  );
};

export default ArrowDown;
