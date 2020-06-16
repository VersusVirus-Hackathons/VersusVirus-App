import React, { Fragment } from "react";
import styled from "styled-components";
import CheckboxListItem from "./CheckboxListItem";
import Spacer from "../../layout/components/Spacer";

const Base = styled.div``;

type Option = {
  id: string;
  title: string;
  description: string;
};
export interface CheckboxListProps {
  style?: {};
  className?: string;
  options: Option[];
  value: string[];
  onChange: (v: string[]) => void;
  singleSelect?: boolean;
}

const CheckboxList: React.FC<CheckboxListProps> = ({
  style,
  className,
  options,
  value = [],
  onChange,
  singleSelect,
}) => (
  <Base style={style} className={className}>
    {options?.map((option, index) => {
      const checked = value.includes(option.id);
      const isLast = index === options.length - 1;
      return (
        <Fragment key={option.id}>
          <CheckboxListItem
            checked={checked}
            onClick={() => {
              if (singleSelect) {
                if (checked) {
                  onChange([]);
                } else {
                  onChange([option.id]);
                }
              } else {
                if (checked) {
                  onChange(value.filter((v) => v !== option.id));
                } else {
                  onChange([...value, option.id]);
                }
              }
            }}
            title={option.title}
            description={option.description}
          />
          {!isLast ? <Spacer /> : null}
        </Fragment>
      );
    })}
  </Base>
);

export default CheckboxList;
