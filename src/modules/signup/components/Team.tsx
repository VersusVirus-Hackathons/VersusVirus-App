import React from "react";
import styled from "styled-components";
import SimpleSchema from "simpl-schema";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import { AutoForm, AutoFields } from "uniforms-material";
import { useStoreActions, useStoreState } from "../../../model";
import { useRouter } from "next/router";
import EmailAdressInputs from "./EmailAdressInputs";

import NextButton from "./NextButton";
import Button from "../../core/components/Button";

const Base = styled.div``;

export interface AdditionalInfoProps {
  style?: {};
  className?: string;
}

const schema = new SimpleSchema(
  {
    participateInTeamBuildingSession: {
      type: Boolean,
      label: "Yes, I would like to participate in a team bonding session.",
      defaultValue: true,
    },
  } as any,
  { requiredByDefault: false },
);

const schemaBridge = new SimpleSchema2Bridge(schema);

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  style,
  className,
}) => {
  const router = useRouter();
  const { profile } = useStoreState((s) => s.signup);
  const updateProfile = useStoreActions((s) => s.signup.updateProfile);

  return (
    <Base style={style} className={className}>
      <AutoForm
        model={profile}
        schema={schemaBridge}
        onSubmit={(model) => {
          // This data is coming from the EmailAdressInputs component.
          const el: any = document.getElementById("possibleTeamMemberEmails");
          if (el !== null) model.possibleTeamMemberEmails = el.value;
          updateProfile(model);
          router.push("/signup/steps/[step]", "/signup/steps/5");
        }}
      >
        <EmailAdressInputs></EmailAdressInputs>
        <AutoFields />
        <Button type="subit">Next</Button>
      </AutoForm>
    </Base>
  );
};

export default AdditionalInfo;
