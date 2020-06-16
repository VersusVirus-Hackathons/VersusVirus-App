import React, { useState } from "react";
import styled from "styled-components";
import { useStoreState } from "../../../model";
import Button from "../../core/components/Button";
import useSendLoginEmail from "../../user/hooks/useSendLoginEmail";
import ContentPadding from "../../layout/components/ContentPadding";

const Base = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

export interface ThankYouProps {
  style?: {};
  className?: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ style, className }) => {
  const email = useStoreState((s) => s.signup.profile.email);
  const sendLoginEmail = useSendLoginEmail();
  const [processing, setProcessing] = useState(false);
  return (
    <Base style={style} className={className}>
      <ContentPadding>
        <p>
          Thank you for signing up. <br />
          <br />
          For security reasons, we've sent you an e-mail to {email} to confirm
          your registration.
        </p>
        <p>
          Didn't get the e-mail? <br />
          <br />
          <Button
            disabled={processing}
            onClick={async () => {
              try {
                setProcessing(true);
                await sendLoginEmail(email);
              } catch (e) {
                alert(e.message);
              } finally {
                setProcessing(false);
              }
            }}
          >
            {processing ? "Please wait" : "Resend"}
          </Button>
        </p>
      </ContentPadding>
    </Base>
  );
};

export default ThankYou;
