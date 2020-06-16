import React, { Component } from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  ReferenceArrayInput,
  SelectArrayInput,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  FunctionField,
} from "react-admin";

export const HackerTopicList = (props) => (
  <List {...props} perPage={20}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <FunctionField
        label="Slack"
        render={(record) => (
          <a target="_blank" href={record.slack?.url}>
            Slack
          </a>
        )}
      />
      <EditButton />
    </Datagrid>
  </List>
);

const HackerTopicTitle = ({ record }: any) => {
  return <span>HackerTopic {record ? `"${record.title}"` : ""}</span>;
};

export const HackerTopicEdit = (props) => (
  <Edit title={<HackerTopicTitle />} {...props}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <TextInput source="title" fullWidth />
      <TextInput source="description" fullWidth multiline />
      <ReferenceArrayInput
        label="Primary Challenges"
        source="primaryChallenges"
        reference="Challenge"
        fullWidth
      >
        <SelectArrayInput
          fullWidth
          optionText={(e) => {
            return e?.id ?? "NOT FOUND";
          }}
        />
      </ReferenceArrayInput>
      <ReferenceArrayInput
        label="Related Challenges"
        source="relatedChallenges"
        reference="Challenge"
        fullWidth
      >
        <SelectArrayInput
          fullWidth
          optionText={(e) => {
            return e?.id ?? "NOT FOUND";
          }}
        />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const HackerTopicCreate = (props) => (
  <Create title="Create a HackerTopic" {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" fullWidth />
      <TextInput source="description" fullWidth multiline />
    </SimpleForm>
  </Create>
);
