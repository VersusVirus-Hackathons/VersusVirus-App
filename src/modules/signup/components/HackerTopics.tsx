import React from "react";
import styled from "styled-components";
import { useStoreActions, useStoreState } from "../../../model";
import CheckboxList from "../../form/components/CheckboxList";
import NextButton from "./NextButton";
import Spacer from "../../layout/components/Spacer";
import useHackerTopics from "../../mentors/hooks/useHackerTopics";
import { HiddenField } from "uniforms-material";

const Base = styled.div``;

export interface HackerStep4Props {
  style?: {};
  className?: string;
}

const HackerStep4: React.FC<HackerStep4Props> = ({ style, className }) => {
  const { data } = useHackerTopics();
  const updateProfile = useStoreActions((s) => s.signup.updateProfile);
  const hackerTopics = useStoreState((s) => s.signup.profile.hackerTopics);
  const valid = hackerTopics?.length > 0;
  return (
    <Base style={style} className={className}>
      <CheckboxList
        options={data?.hackerTopics}
        value={hackerTopics}
        onChange={(v) =>
          updateProfile({
            hackerTopics: v,
          })
        }
      />
      <Spacer unit={2} />
      <p>Please select 1-3 topics</p>
      <Spacer unit={2} />
      <NextButton step="4" disabled={!valid} />
    </Base>
  );
};

export default HackerStep4;
