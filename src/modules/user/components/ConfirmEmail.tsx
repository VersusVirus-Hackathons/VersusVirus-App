import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import {
  LoginWithToken,
  LoginWithTokenVariables,
} from "./types/LoginWithToken";

const Base = styled.div``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 100%;
  line-height: 1.2;
`;

export interface ConfirmEmailProps {
  style?: {};
  className?: string;
}

const LOGIN_MUTATION = gql`
  mutation LoginWithToken($email: String!, $token: String!) {
    loginWithToken(email: $email, loginToken: $token) {
      resumeToken
      user {
        id
      }
    }
  }
`;

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ style, className }) => {
  const router = useRouter();
  const email = router.query.email as string;
  const token = router.query.token as string;
  const [mutation] = useMutation<LoginWithToken, LoginWithTokenVariables>(
    LOGIN_MUTATION,
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    mutation({
      variables: {
        email,
        token,
      },
    })
      .then((result) => {
        router.push("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [email, token]);
  return (
    <Base style={style} className={className}>
      {error ? (
        <>
          <Title>Login</Title>
          <Text>
            Oops! It looks like your login link is not valid anymore. Please
            request a new one <a href="/">here</a>.
          </Text>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Base>
  );
};

export default ConfirmEmail;
