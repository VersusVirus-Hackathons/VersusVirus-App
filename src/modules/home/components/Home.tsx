import Link from "next/link";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import SimpleSchema from "simpl-schema";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import { AutoForm } from "uniforms-material";
import { LinkButton } from "../../core/components/Button";
import ContentPadding from "../../layout/components/ContentPadding";
import Spacer from "../../layout/components/Spacer";
import Schedule from "../../schedule/components/Schedule";
import WelcomeMessage from "../../user/components/WelcomeMessage";
import useMe from "../../user/hooks/useMe";
import useSendLoginEmail from "../../user/hooks/useSendLoginEmail";
import InternalBigLink from "../../core/components/InternalBigLink";
import Heading from "../../layout/components/Heading";
import useMyTeam from "../../user/hooks/useMyTeam";
import getConfig from "next/config";
import BigLink from "../../core/components/BigLink";
import ArrowRight from "../../icons/components/ArrowRight";

const { publicRuntimeConfig } = getConfig();
const hasSignup = publicRuntimeConfig?.HAS_SIGNUP == "true";
const hasFeedback = publicRuntimeConfig?.HAS_FEEDBACK == "true";
const hasSlack = publicRuntimeConfig?.SLACK_SIGNUP_URL;

export interface HomeProps {
  style?: {};
  className?: string;
}

const schema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
});

const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 20px;
`;

const schemaBridge = new SimpleSchema2Bridge(schema);
const HomeNotLoggedIn = () => {
  const sendLoginEmail = useSendLoginEmail();
  const [processing, setProcessing] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef<any>();

  return (
    <ContentPadding>
      {!sent ? (
        <>
          {hasSignup ? (
            <>
              <Link href="/signup/steps/1">
                <LinkButton>Sign Up</LinkButton>
              </Link>
              <Spacer unit={3} />
            </>
          ) : null}
          <p>
            Already signed up? Please submit your email to receive a login link.
          </p>
        </>
      ) : (
        <p>Please check your inbox</p>
      )}
      <AutoForm
        ref={ref}
        schema={schemaBridge}
        disabled={processing}
        onSubmit={async (model) => {
          setProcessing(true);

          try {
            await sendLoginEmail(model.email);
            setSent(true);
            ref?.current?.reset();
          } catch (e) {
            // TODO: React notify
            alert(
              "Email address not found: you need to be signed up for this Hackathon.",
            );
          } finally {
            setProcessing(false);
          }
        }}
      />
    </ContentPadding>
  );
};

const Home: React.FC<HomeProps> = ({ style, className }) => {
  const { me, myTeam, loading, hasProject } = useMyTeam();

  if (loading) {
    return <p style={{ padding: "1rem" }}>Loading…</p>;
  }

  if (!me) {
    return <HomeNotLoggedIn />;
  }

  return (
    <ContentPadding>
      <WelcomeMessage />
      {myTeam ? (
        <>
          {hasSlack ? (
            <>
              <BigLink
                href={publicRuntimeConfig.SLACK_SIGNUP_URL}
                target="_blank"
                icon={<ArrowRight />}
              >
                Join Slack
              </BigLink>
            </>
          ) : null}
          <InternalBigLink href="/team">Your team</InternalBigLink>
          {myTeam.challengeSelected ? (
            <>
              <InternalBigLink href="/team/challenge">
                Your team's challenge
              </InternalBigLink>
              {!hasProject ? (
                <InternalBigLink href="/team/project/edit">
                  Start team project
                </InternalBigLink>
              ) : (
                <InternalBigLink href="/team/project">
                  Project submission
                </InternalBigLink>
              )}
            </>
          ) : (
            <>
              <InternalBigLink href="/team/challenge">
                Vote for your preffered challenge
              </InternalBigLink>
            </>
          )}
          {hasFeedback ? (
            <>
              <BigLink
                href={publicRuntimeConfig.FEEDBACK_URL}
                target="_blank"
                icon={<ArrowRight />}
              >
                Provide Feedback
              </BigLink>
            </>
          ) : null}
          <Spacer unit={1} />
        </>
      ) : (
        <Text>
          This is your hackathon dashboard. As the event progresses, you will
          find all your info here.
        </Text>
      )}
      <Spacer unit={1} />
      <Heading>Your Schedule</Heading>
      <Schedule />
      <Spacer unit={4} />
    </ContentPadding>
  );
};

export default Home;
