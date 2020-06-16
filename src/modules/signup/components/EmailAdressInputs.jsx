import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useStoreState } from "../../../model";

const BASE_HEIGHT = 60;
const MAX_INPUTS = 20;

function storedInputs() {
  const { profile } = useStoreState((s) => s.signup);
  return profile.hasOwnProperty("possibleTeamMemberEmails")
    ? profile.possibleTeamMemberEmails.split(",")
    : [];
}

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  color: #50555c;
  font: inherit;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.4;
`;

const List = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ListElement = styled.li`
  height: ${BASE_HEIGHT - 10}px;
  display: flex;
  align-items: center;
  animation: ${fadein} 0.7s;
  margin: 10px 0;
`;

const Input = styled.input`
  font: inherit;
  color: inherit;
  width: 100%;
  border: 0;
  height: 1.1875em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  -webkit-tap-highlight-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
`;

const Add = styled.button`
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  background: #e71d29;
  border-radius: 7px;
  color: white;
  text-align: center;
  padding: 8px 14px;
  font-size: 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;
`;

const Remove = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  padding: 4px 8px;
`;

const Notice = styled.p`
  margin: 10px 0;
  vertical-align: middle;
  animation: ${fadein} 0.7s;
`;

function EmailAdressInputs() {
  const [inputs, setInputs] = useState(storedInputs());
  const [height, setHeight] = useState(inputs.length * BASE_HEIGHT);
  const [allowAdd, setAllowAdd] = useState(true);

  const handleAdd = (event) => {
    event.preventDefault();
    const copy = [...inputs, ""];
    setInputs(copy);
    setHeight(copy.length * BASE_HEIGHT);
    setAllowAdd(copy.length < MAX_INPUTS);
  };

  const handleRemove = (event, index) => {
    event.preventDefault();
    const copy = [...inputs];
    copy.splice(index, 1);
    setInputs(copy);
    setHeight(copy.length * BASE_HEIGHT);
    setAllowAdd(copy.length < MAX_INPUTS);
  };

  const handleChange = (event, index) => {
    const copy = [...inputs];
    copy[index] = event.target.value;
    setInputs(copy);
  };

  return (
    <FieldSet>
      <legend>
        Do you already have a team? Please add the email addresses of your team
        members:
      </legend>
      <List
        style={{
          height,
        }}
      >
        {inputs.map((value, index) => (
          <ListElement key={index}>
            <label htmlFor={"e" + index}>Email:&nbsp;</label>
            <Input
              name={"e" + index}
              type="email"
              value={value}
              onChange={() => handleChange(event, index)}
              placeholder="name@example.com"
            />
            <Remove onClick={() => handleRemove(event, index)}>🗑</Remove>
          </ListElement>
        ))}
      </List>
      <Add onClick={handleAdd} disabled={!allowAdd}>
        Add Email
      </Add>
      {inputs.length > 0 && (
        <Notice>
          Please note:<br/>
          • Your teammates will need to sign up individually, but they do not need to re-enter the team.<br/>
          • If your team has its own challenge, enter it into the <a href="https://forms.gle/h1M3NfkYZPYGThsS8" target="_blank">challenge submission form</a>.
        </Notice>
      )}
      {!allowAdd && (
        <Notice>The maximum allowed amount is {MAX_INPUTS}.</Notice>
      )}
      <br />
      <input
        readOnly
        name="possibleTeamMemberEmails"
        id="possibleTeamMemberEmails"
        value={inputs.filter((s) => s.length > 0).join(",")}
        type="hidden"
      />
    </FieldSet>
  );
}

export default EmailAdressInputs;
