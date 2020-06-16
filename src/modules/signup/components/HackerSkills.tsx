import { gql, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { useStoreActions, useStoreState } from "../../../model";
import CheckboxList from "../../form/components/CheckboxList";
import { GetHackerTypes } from "./types/GetHackerTypes";
import Link from "next/link";
import { GetHackerSkills } from "./types/GetHackerSkills";
import { LinkButton } from "../../core/components/Button";
import NextButton from "./NextButton";
import Spacer from "../../layout/components/Spacer";

const Base = styled.div``;

export interface HackerStep3Props {
  style?: {};
  className?: string;
}

const QUERY = gql`
  query GetHackerSkills {
    hackerSkills {
      id
      title
      description
    }
  }
`;

const HackerStep3: React.FC<HackerStep3Props> = ({ style, className }) => {
  const { data } = useQuery<GetHackerSkills>(QUERY);
  const updateProfile = useStoreActions((s) => s.signup.updateProfile);
  const hackerSkills = useStoreState((s) => s.signup.profile.hackerSkills);
  const valid = hackerSkills?.length > 0;

  return (
    <Base style={style} className={className}>
      <p>Please select 1-5 skills</p>
      <Spacer unit={2} />
      <CheckboxList
        options={data?.hackerSkills}
        value={hackerSkills}
        onChange={(v) =>
          updateProfile({
            hackerSkills: v,

            // We are disabling the hacker types temporarily in signup.
            // Setting everybody to flexible to not break other parts of the system.
            hackerTypes: ["flexible"],
          })
        }
      />
      <Spacer unit={2} />
      <NextButton step="3" disabled={!valid} />
    </Base>
  );
};

export default HackerStep3;
