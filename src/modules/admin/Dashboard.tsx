// in src/Dashboard.js
import React, { useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import SimpleSchema from "simpl-schema";

import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import { AutoForm, LongTextField } from "uniforms-material";
import { useMutation, gql } from "@apollo/client";
import {
  SendEmailToAllUser,
  SendEmailToAllUserVariables,
} from "./types/SendEmailToAllUser";
import Spacer from "../layout/components/Spacer";
import Heading from "../layout/components/Heading";

const schema = new SimpleSchema({
  subject: {
    type: String,
    label: "Subject",
  },
  text: {
    type: String,
    label: "Text",
    uniforms: {
      component: LongTextField,
    },
  },
} as any);

const schemaBridge = new SimpleSchema2Bridge(schema);

const BroadCast = () => {
  const [sendEmail] = useMutation<
    SendEmailToAllUser,
    SendEmailToAllUserVariables
  >(gql`
    mutation SendEmailToAllUser($subject: String!, $text: String) {
      sendEmailToAllUser(subject: $subject, text: $text) {
        emailsSent
      }
    }
  `);
  const [processing, setProcessing] = useState(false);
  const ref = useRef<any>();
  return (
    <AutoForm
      ref={ref}
      submitDisabled={processing}
      schema={schemaBridge}
      onSubmit={async ({ text, subject }) => {
        try {
          setProcessing(true);
          const yes = confirm(
            "Are you really sure to send this message to all users? This can't be undone and this can't be canceled",
          );

          if (yes) {
            await sendEmail({ variables: { text, subject } });
            ref.current?.reset();
            alert("done!");
          }
        } finally {
          setProcessing(false);
        }
      }}
    />
  );
};

export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>
      This is work in progress. If you need advanced usecases, you might
      consider using the{" "}
      <a target="_blank" href="/api/graphql">
        GraphQL-Playground
      </a>
      <Spacer unit={4} />
      <Heading>Broadcast a message</Heading>
      <BroadCast />
    </CardContent>
  </Card>
);
