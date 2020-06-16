import React from "react";
import styled from "styled-components";
import Header from "./Header";
import GradientHeader from "../../submittedProject/components/GradientHeader";
import FooterLogo from "../../icons/components/FooterLogo";

const Base = styled.div`
  background-color: #f2f2f2;
`;

const Content = styled.div`
  max-width: 1100px;
  padding: 0 16px;
  margin: 0 auto;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 40px;
  padding-left: 10px;
`;

const Tag = styled.div<{ color: String }>`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 5px 8px;
  color: ${(p) => p.color};
  border-radius: 15px;
  border: 1px solid ${(p) => p.color};
  font-size: 14px;
`;

export interface PublicPageLayoutProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  tagTitle?: string;
}

const PublicPageLayout: React.FC<PublicPageLayoutProps> = ({
  title,
  children,
  backgroundColor = "#ff0000",
  color = "#fff",
  tagTitle,
}) => {
  return (
    <Base>
      <Header showHamburger={false} isLogoLinked={false} />
      <GradientHeader
        style={{ position: "relative" }}
        backgroundColor={backgroundColor}
      >
        <h1 style={{ color: color }}>{title}</h1>
        {tagTitle ? <Tag color={color}>{tagTitle}</Tag> : null}
      </GradientHeader>
      <Content>{children}</Content>
      <Footer>
        <FooterLogo />
      </Footer>
    </Base>
  );
};

export default PublicPageLayout;
