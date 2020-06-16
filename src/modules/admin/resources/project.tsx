import React, { Component } from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  Admin,
  Resource,
  DateInput,
  DateField,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TabbedForm,
  FormTab,
} from "react-admin";

const ProjectFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Title" source="title" alwaysOn />
    <TextInput label="Problem" source="problem" alwaysOn />
  </Filter>
);

export const ProjectList = (props) => (
  <List {...props} filters={<ProjectFilter />} perPage={20}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="tagline" />
      <EditButton />
    </Datagrid>
  </List>
);

const ProjectTitle = ({ record }: any) => {
  return <span>Project {record ? `"${record.title}"` : ""}</span>;
};

export const ProjectEdit = (props) => (
  <Edit title={<ProjectTitle />} {...props}>
    <TabbedForm>
      <FormTab label="overview">
        <TextInput disabled source="id" />
        <TextInput source="title" fullWidth />
        <TextInput source="tagline" fullWidth multiline />
        <TextInput source="thumbnail" fullWidth multiline />
        <ReferenceInput label="Team" source="team" reference="Team">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput
          label="Challenge"
          source="challenge"
          reference="Challenge"
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
      </FormTab>

      <FormTab label="details">
        <TextInput source="description" fullWidth multiline />
        <TextInput source="technologiesUsed" fullWidth multiline />
        <TextInput source="obstacles" fullWidth multiline />
        <TextInput source="accomplishments" fullWidth multiline />
        <TextInput source="learnings" fullWidth multiline />
        <TextInput source="nextSteps" fullWidth multiline />
        <TextInput source="videoUrl" fullWidth />
        <TextInput source="urls" fullWidth />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const ProjectCreate = (props) => (
  <Create title="Create a Project" {...props}>
    <TabbedForm>
      <FormTab label="overview">
        <TextInput source="title" fullWidth />
        <TextInput source="tagline" fullWidth multiline />
        <TextInput source="thumbnail" fullWidth multiline />
        <ReferenceInput label="Team" source="team" reference="Team">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput
          label="Challenge"
          source="challenge"
          reference="Challenge"
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
      </FormTab>

      <FormTab label="details">
        <TextInput source="description" fullWidth multiline />
        <TextInput source="technologiesUsed" fullWidth multiline />
        <TextInput source="obstacles" fullWidth multiline />
        <TextInput source="accomplishments" fullWidth multiline />
        <TextInput source="learnings" fullWidth multiline />
        <TextInput source="nextSteps" fullWidth multiline />
        <TextInput source="videoUrl" fullWidth />
        <TextInput source="urls" fullWidth />
      </FormTab>
    </TabbedForm>
  </Create>
);
