import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import { useStoreState } from "../../../model";
import MainNavigation from "../../navigation/components/MainNavigation";

const Base = styled.div``;

const Content = styled.div`
  padding-bottom: 0;
`;

const InfoBox = styled.div`
  margin-top: 24px;
  padding: 24px;
  background-color: #f4e456;
  line-height: 1.2;
`;

export interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const showNavigation = useStoreState((s) => s.layout.showNavigation);

  return (
    <Base>
      <Header />
      <ContentWrapper>
        <Content>
          <Spacer />
          {children}
          <Spacer unit={2} />
          <InfoBox>
            Any questions? Check out the{" "}
            <a
              href="https://wiki.basel.impacthub.net/pages/viewpage.action?pageId=1380751004"
              target="_blank"
            >
              FAQs
            </a>{" "}
            or contact our friendly{" "}
            <a href="mailto:helpdesk@versusvirus.ch?subject=Question&amp;body=Dear%20%23VersusVirus%20team%2C%20I%20have%20a%20question%20about%20...">
              helpdesk
            </a>
            .
          </InfoBox>
        </Content>
      </ContentWrapper>
      {showNavigation ? <MainNavigation /> : null}
    </Base>
  );
};

export default PageLayout;
