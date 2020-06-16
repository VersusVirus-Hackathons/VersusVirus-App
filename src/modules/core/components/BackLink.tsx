import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Base = styled.a`
  display: flex;
  position: relative;
  align-items: center;
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

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  padding-left: 15px;
`;

export interface BackLinkProps {
  style?: {};
  className?: string;
  icon?: any;
  target?: string;
  onClick?: any;
  href: string;
  as?: string;
}

const BackLink: React.FC<BackLinkProps> = React.forwardRef(
  ({ style, className, children, icon, href, as, ...props }, ref) => {
    return (
      <Link href={href} as={as} passHref>
        <Base style={style} className={className} {...props} ref={ref}>
          <Left>{icon}</Left>
          <Right>{children}</Right>
        </Base>
      </Link>
    );
  },
);

export default BackLink;
