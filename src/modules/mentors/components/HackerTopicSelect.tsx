import React from "react";
import {
  Select,
  MenuItem,
  withStyles,
  InputBase,
  ServerStyleSheets,
} from "@material-ui/core";
import styled from "styled-components";
import useHackerTopics from "../hooks/useHackerTopics";

interface SelectItemProps {
  isCustomized: boolean;
}

const StyledSelect = styled(Select)<SelectItemProps>`
  ${(p) =>
    p.isCustomized
      ? `
    .MuiSelect-root {
      border-radius: 5px;
      position: relative;
      background-color: red;
      border: 1px solid red;
      font-size: 16px;
      color: white;
      padding: 10px 26px 10px 12px;
      transition: none;
    }

    &.MuiInput-underline:before {
      display: none;
    }

    &.MuiInput-underline:after {
      display: none;
    }

    .MuiSelect-root:focus {
      border-radius: 5px;
      border-color: red;
      background-color: red;
    }
  `
      : ""}
`;

export interface HackerTopicSelectProps {
  value?: string;
  onChange: (topicId: string) => void;
  isCustomized?: boolean;
}

const HackerTopicSelect: React.FC<HackerTopicSelectProps> = ({
  value,
  onChange,
  isCustomized = false,
}) => {
  const { hackerTopics, loading: loadingTopics } = useHackerTopics();

  return (
    <StyledSelect
      value={value}
      onChange={(event) => onChange(event.target.value as string)}
      style={{ width: "100%" }}
      displayEmpty
      isCustomized={isCustomized}
    >
      <MenuItem value="">All Topics</MenuItem>
      {hackerTopics?.map((t) => (
        <MenuItem key={t.id} value={t.id}>
          {t.title}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default HackerTopicSelect;
