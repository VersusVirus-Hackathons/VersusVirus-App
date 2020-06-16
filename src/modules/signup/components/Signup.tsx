import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import HackerSkills from "./HackerSkills";
import HackerTopics from "./HackerTopics";
import Terms from "./Terms";
import Spacer from "../../layout/components/Spacer";
import ContentPadding from "../../layout/components/ContentPadding";
import Team from "./Team";

const Base = styled.div``;

export interface SignupProps {
  step: string;
}

const STEPS = {
  1: {
    Component: Profile,
    title: "Profile",
  },
  2: {
    Component: HackerSkills,
    title: "What is your skillset?",
  },
  3: {
    title: "What is your preferred topic?",
    Component: HackerTopics,
  },
  4: {
    title: "Team Members",
    Component: Team,
  },
  5: {
    title: "Terms and conditions",
    Component: Terms,
  },
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 24px;
`;
const StepNumber = styled.p``;

const StepTitle = styled.h3``;

const Signup: React.FC<SignupProps> = ({ step }) => {
  const stepDefinition = STEPS[step];

  if (!stepDefinition) {
    return <p>Unknown step {step}</p>;
  }
  const { Component } = stepDefinition;
  return (
    <Base>
      <ContentPadding>
        <Header>
          <StepTitle>{stepDefinition.title}</StepTitle>
          <StepNumber>
            {step}/{Object.keys(STEPS).length}
          </StepNumber>
        </Header>
        <Spacer />
        <Component />
      </ContentPadding>
    </Base>
  );
};

export default Signup;
