import React, { Component } from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  ArrayInput,
  ReferenceField,
  SimpleFormIterator,
  Datagrid,
  TextField,
  EditButton,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  ReferenceArrayInput,
  Create,
  Filter,
  FunctionField,
} from "react-admin";

const TeamFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Team Name" source="id" alwaysOn />
    <ReferenceInput
      alwaysOn
      label="Topic"
      source="primaryTopic"
      reference="HackerTopic"
      fullWidth
    >
      <SelectInput
        fullWidth
        optionText={(e) => {
          return e?.id ?? "NOT FOUND";
        }}
      />
    </ReferenceInput>
  </Filter>
);

export const TeamList = (props) => (
  <List {...props} filters={<TeamFilter />} perPage={20}>
    <Datagrid>
      <TextField source="id" />
      {/*<ReferenceField
        alwaysOn
        label="Primary Topic"
        source="primaryTopic"
        reference="HackerTopic"
      >
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField
        alwaysOn
        label="Selected Challenge"
        source="challengeSelected"
        reference="Challenge"
      >
        <TextField source="title" />
      </ReferenceField>
        */}
      {/*<FunctionField
        label="Slack"
        render={record => (
          <a target="_blank" href={record.slack?.url}>
            Slack
          </a>
        )}
      /> */}

      <EditButton />
    </Datagrid>
  </List>
);

const TeamTitle = ({ record }: any) => {
  return <span>Team: {record ? `"${record.id}"` : ""}</span>;
};

export const TeamEdit = (props) => (
  <Edit title={<TeamTitle />} {...props} undoable={false}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <ReferenceInput
        allowEmpty
        label="Challenge selected"
        source="challengeSelected"
        reference="Challenge"
        perPage={10000}
      >
        <SelectInput
          fullWidth
          optionText={(e) => {
            return e ? `${e.title}` : null;
          }}
        />
      </ReferenceInput>

      <ReferenceInput
        label="Primary Topic"
        source="primaryTopic"
        reference="HackerTopic"
        fullWidth
      >
        <SelectInput
          fullWidth
          optionText={(e) => {
            return e?.id ?? "NOT FOUND";
          }}
        />
      </ReferenceInput>
      <ReferenceArrayInput
        label="Challenges to select"
        source="challengesToSelect"
        reference="Challenge"
        fullWidth
      >
        <SelectArrayInput
          optionText={(e) => {
            return e ? `${e.title}` : null;
          }}
        />
      </ReferenceArrayInput>
      <ReferenceArrayInput
        label="Members"
        source="members"
        reference="User"
        fullWidth
      >
        <SelectArrayInput
          optionText={(e) => {
            return e?.email ?? "NOT FOUND";
          }}
        />
      </ReferenceArrayInput>
      <ArrayInput source="tags">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const TeamCreate = (props) => (
  <Create {...props}>
    <SimpleForm variant="outlined">
      <TextInput source="id" />

      <ReferenceArrayInput
        label="Challenges to select"
        source="challengesToSelect"
        reference="Challenge"
      >
        <SelectArrayInput
          optionText={(e) => {
            return e ? `${e.id} - ${e.title}` : null;
          }}
        />
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Members" source="members" reference="User">
        <SelectArrayInput
          fullWidth
          optionText={(e) => {
            return e?.email ?? "NOT FOUND";
          }}
        />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
