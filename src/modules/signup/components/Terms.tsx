import React from "react";
import styled from "styled-components";
import RegisterButton from "./RegisterButton";

const Base = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export interface TermsProps {
  style?: {};
  className?: string;
}

const Terms: React.FC<TermsProps> = ({ style, className }) => {
  return (
    <Base>
      <p>
        We will need your data to create statistics after the event. Your name
        and contacts will not be published or passed on.
        <br />
        <br />
        We want to keep you in the loop: You are okay with receiving a maximum
        of 15 emails as part of our newsletter before and after the event.
        <br />
        <br />
        You are okay with simple English as main event language. Of course, you
        can hand in your final solutions in any national language. <br />
        <br />
        Your solutions belong to you (Geistiges Eigentum), just you and your
        team are able to decide, if you want to give your solution to others or
        involve other parties for further development effort.
        <br />
        <br />
        We might do screenshots during online sessions and use these pics as
        public communication material. <br />
        <br />
        Our hackathon is dedicated to providing a safe and comfortable
        environment and harassment-free experience for everyone, that's why we
        require all participants to agree with the{" "}
        <a target="_blank" href="https://hackcodeofconduct.org/" rel="noopener">
          Hack Code of Conduct
        </a>
        .
        <br />
        <br />
        By clicking on the "Yes, I Accept" button you agree to our Terms and
        Conditions
      </p>
      <RegisterButton />
    </Base>
  );
};

export default Terms;
