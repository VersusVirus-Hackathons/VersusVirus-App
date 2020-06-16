import React from "react";
import styled from "styled-components";

const Base = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #50555c;
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  min-height: 86px;

  /* Larger touch target */
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: " ";
    cursor: pointer;
  }
`;

const Left = styled.div``;

const Right = styled.div``;

export interface BigLinkProps {
  style?: {};
  className?: string;
  icon?: any;
  href?: string;
  target?: string;
  onClick?: any;
}

const BigLink: React.FC<BigLinkProps> = React.forwardRef(
  ({ style, className, children, icon, ...props }, ref) => {
    return (
      <Base style={style} className={className} {...props} ref={ref}>
        <Left>{children}</Left>
        <Right>{icon}</Right>
      </Base>
    );
  },
);

export default BigLink;
