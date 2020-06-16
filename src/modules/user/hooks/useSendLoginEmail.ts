import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import { ResendEmail, ResendEmailVariables } from "./types/ResendEmail";

export interface ThankYouProps {
  style?: {};
  className?: string;
}

export const RESEND_MUTATION = gql`
  mutation ResendEmail($email: String!) {
    resendVerificationEmail(email: $email) {
      success
    }
  }
`;

const useSendLoginEmail = () => {
  const [mutation] = useMutation<ResendEmail, ResendEmailVariables>(
    RESEND_MUTATION,
  );
  return useCallback((email: string) => mutation({ variables: { email } }), []);
};

export default useSendLoginEmail;
