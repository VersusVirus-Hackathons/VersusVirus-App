import React from "react";
import styled from "styled-components";
import { ChallengeDetails as ChallengeDetailsT } from "../../../fragments/types/ChallengeDetails";
import Heading from "../../layout/components/Heading";
import Spacer from "../../layout/components/Spacer";
import Linkify from "react-linkify";
const Base = styled.div``;

export interface ChallengeDetailsProps {
  style?: {};
  className?: string;
  challenge: ChallengeDetailsT;
}
const componentDecorator = (href, text, key) => (
  <a href={href} key={key} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({
  style,
  className,
  challenge,
}) => {
  return (
    <Base style={style} className={className}>
      <Linkify componentDecorator={componentDecorator}>
        <Heading>{challenge.title}</Heading>
        <p>{challenge.challenge}</p>
        <Spacer />
        <Heading>Context</Heading>
        <p>{challenge.context}</p>
        <Spacer />
        <Heading>Solution</Heading>
        <p>{challenge.solution}</p>
        <Spacer />
        <Heading>Resources</Heading>
        <p>{challenge.resources}</p>
      </Linkify>
    </Base>
  );
};

export default ChallengeDetails;
