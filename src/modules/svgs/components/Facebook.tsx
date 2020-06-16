import React from "react";
import styled from "styled-components";

export interface FacebookProps {
  style?: {};
  className?: string;
}

const Facebook: React.FC<FacebookProps> = ({ style, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 504" width={20}>
      <path d="M377.6 0H126C56.8 0 0 56.8 0 126.4V378c0 69.2 56.8 126 126 126h251.6c69.6 0 126.4-56.8 126.4-126.4V126.4C504 56.8 447.2 0 377.6 0zm-58 252H272v156h-60V252h-32v-64h28v-27.2c0-25.6 12.8-66 66.8-66H324V148h-34.8c-5.6 0-13.2 3.6-13.2 16v24h49.2l-5.6 64z" />
    </svg>
  );
};

export default Facebook;
