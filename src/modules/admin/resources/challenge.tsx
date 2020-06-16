import React, { Component } from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  SingleFieldList,
  ChipField,
  ReferenceManyField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
} from "react-admin";

const ChallengeFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Title" source="title" alwaysOn />
    <TextInput label="Context" source="context" alwaysOn />
    <ReferenceInput
      alwaysOn
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
    <ReferenceInput
      alwaysOn
      label="Related Topic"
      source="relatedTopics"
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

export const ChallengeList = (props) => (
  <List {...props} filters={<ChallengeFilter />} perPage={20}>
    <Datagrid>
      <TextField source="title" />
      {/*
      <ReferenceField
        alwaysOn
        label="Primary Topic"
        source="primaryTopic"
        reference="HackerTopic"
      >
        <TextField source="title" />
      </ReferenceField>
      <ReferenceManyField
        label="Related Topics"
        source="relatedTopics"
        reference="HackerTopic"
        target=""
      >
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceManyField>
        */}

      <EditButton />
    </Datagrid>
  </List>
);

const ChallengeTitle = ({ record }: any) => {
  return <span>Challenge {record ? `"${record.title}"` : ""}</span>;
};

const renderForm = ({ isCreate }: { isCreate?: boolean }) => (
  <>
    <TextInput source="id" disabled={!isCreate} />
    <TextInput source="title" fullWidth />
    <TextInput source="context" fullWidth multiline />
    <TextInput source="challenge" fullWidth multiline />
    <TextInput source="solution" fullWidth multiline />

    <TextInput source="resources" fullWidth multiline />
    <TextInput source="contactName" />
    <TextInput source="contactEmail" />
    <TextInput source="organization" />
    <TextInput source="commentsByTeam" />

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
      label="Related topics"
      source="relatedTopics"
      reference="HackerTopic"
      fullWidth
    >
      <SelectArrayInput
        fullWidth
        optionText={(e) => {
          return e?.id ?? "NOT FOUND";
        }}
      />
    </ReferenceArrayInput>
  </>
);

export const ChallengeEdit = (props) => (
  <Edit title={<ChallengeTitle />} {...props}>
    <SimpleForm variant="outlined">
      {renderForm({ isCreate: false })}
    </SimpleForm>
  </Edit>
);

export const ChallengeCreate = (props) => (
  <Create title="Create a Challenge" {...props}>
    <SimpleForm variant="outlined">
      {renderForm({ isCreate: false })}
    </SimpleForm>
  </Create>
);
