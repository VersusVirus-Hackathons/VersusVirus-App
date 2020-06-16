import React from "react";
import styled from "styled-components";

export interface ExternalLinkIconProps {
  style?: {};
  className?: string;
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({
  style,
  className,
}) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M34.4 0H21.3a1.6 1.6 0 000 3.3h9.1L13.6 20a1.6 1.6 0 002.3 2.3L32.7 5.6v9.1a1.6 1.6 0 003.3 0v-13c0-1-.7-1.7-1.6-1.7z"
          fill="red"
        />
        <path
          d="M27.8 16.4c-.9 0-1.6.7-1.6 1.6v14.7h-23V9.8H18a1.6 1.6 0 000-3.3H1.6C.7 6.5 0 7.3 0 8.2v26.2c0 .9.7 1.6 1.6 1.6h26.2c1 0 1.7-.7 1.7-1.6V18c0-.9-.8-1.6-1.7-1.6z"
          fill="#50555C"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ExternalLinkIcon;
