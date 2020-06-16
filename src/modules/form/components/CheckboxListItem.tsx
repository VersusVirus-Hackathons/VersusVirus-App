import React from "react";
import styled from "styled-components";
import Spacer from "../../layout/components/Spacer";

export interface CheckboxListItemProps {
  checked: boolean;
  onClick: () => void;
  title: string;
  description: string;
}

const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
`;

const Content = styled.div`
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 5px;
`;

const Base = styled.div`
  font-size: 16px;
  display: flex;
  cursor: pointer;
  &:hover ${Title} {
    text-decoration: underline;
  }
`;

const CheckboxListItem: React.FC<CheckboxListItemProps> = ({
  checked,
  onClick,
  title,
  description,
}) => (
  <Base onClick={onClick}>
    <input type="checkbox" checked={checked} style={{ flexShrink: 0 }} />
    <Content>
      <Title>{title}</Title>
      {description ? <Description>{description}</Description> : null}
    </Content>
  </Base>
);

export default CheckboxListItem;
