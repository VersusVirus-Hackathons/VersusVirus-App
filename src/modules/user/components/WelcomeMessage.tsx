import React from "react";
import styled from "styled-components";
import useMe from "../hooks/useMe";
import Heading from "../../layout/components/Heading";
import useLogout from "../hooks/useLogout";

const Base = styled.div``;

export interface WelcomeMessageProps {
  style?: {};
  className?: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  style,
  className,
}) => {
  const { me } = useMe();
  const logout = useLogout();
  if (!me) {
    return null;
  }
  return (
    <Base style={style} className={className}>
      <Heading>Hello {me.firstname}!</Heading>
    </Base>
  );
};

export default WelcomeMessage;
