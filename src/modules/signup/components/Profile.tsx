import { useRouter } from "next/router";
import React from "react";
import SimpleSchema from "simpl-schema";
import styled from "styled-components";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import { AutoFields, AutoForm } from "uniforms-material";
import { useStoreActions, useStoreState } from "../../../model";
import Button from "../../core/components/Button";

const Base = styled.div``;

import dynamic from "next/dynamic";
import Spacer from "../../layout/components/Spacer";

const ImageField = dynamic({
  loader: () => import("../../form/components/ImageField"),
  ssr: false,
});
export interface HackerStep1Props {
  style?: {};
  className?: string;
}

const schema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  firstname: {
    type: String,
    label: "First Name",
  },
  lastname: {
    type: String,
    label: "Last Name",
  },
  phoneNumber: {
    type: String,
    label: "Mobile Number",
  },
  languages: {
    label: "Language",
    type: Array,
  },
  "languages.$": {
    type: String,

    allowedValues: ["de", "fr", "en", "it"],
  },
  city: String,
});

const schemaBridge = new SimpleSchema2Bridge(schema);

const HackerStep1: React.FC<HackerStep1Props> = ({ style, className }) => {
  const router = useRouter();
  const { profile } = useStoreState((s) => s.signup);
  const updateProfile = useStoreActions((s) => s.signup.updateProfile);

  return (
    <Base style={style} className={className}>
      <AutoForm
        model={schema.clean(profile)}
        schema={schemaBridge}
        onSubmit={(model) => {
          updateProfile(schema.clean(model));
          router.push("/signup/steps/[step]", "/signup/steps/2");
        }}
      >
        <AutoFields />
        <Spacer />
        <ImageField
          value={profile.profilePhotoBase64}
          onChange={(img) =>
            updateProfile({
              profilePhotoBase64: img,
            })
          }
        />
        <Spacer />
        <p>If you don’t want to provide a photo of yourself, we understand.</p>
        <Spacer unit={2} />
        <Button type="submit">Next</Button>
      </AutoForm>
    </Base>
  );
};

export default HackerStep1;
