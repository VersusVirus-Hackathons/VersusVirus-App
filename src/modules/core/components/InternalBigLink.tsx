import React from "react";
import styled from "styled-components";
import Link from "next/link";
import BigLink from "./BigLink";
import ArrowRight from "../../icons/components/ArrowRight";

export interface InternalBigLinkProps {
  style?: {};
  className?: string;
  href: string;
  as?: string;
}

const InternalBigLink: React.FC<InternalBigLinkProps> = ({
  style,
  className,
  children,
  href,
  as,
}) => {
  return (
    <Link href={href} as={as} passHref>
      <BigLink style={style} className={className} icon={<ArrowRight />}>
        {children}
      </BigLink>
    </Link>
  );
};

export default InternalBigLink;
