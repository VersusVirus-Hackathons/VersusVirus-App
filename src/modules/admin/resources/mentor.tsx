import React from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  SelectArrayInput,
  ReferenceInput,
  ReferenceArrayInput,
  SingleFieldList,
  ChipField,
  ReferenceManyField,
  ReferenceField,
  SelectInput,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  Pagination,
} from "react-admin";

const MentorFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" alwaysOn />
    <ReferenceInput
      alwaysOn
      label="Topic"
      source="topics"
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

const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100, 200, 500]} {...props} />
);

export const MentorList = (props) => (
  <List {...props} filters={<MentorFilter />} pagination={<PostPagination />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

const MentorTitle = ({ record }: any) => {
  return <span>Mentor {record ? `"${record.name}"` : ""}</span>;
};

export const MentorEdit = (props) => (
  <Edit title={<MentorTitle />} {...props} undoable={false}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="skills" />
      <TextInput source="linkedin" />
      <TextInput source="languages" />
      <ReferenceArrayInput
        label="Topics"
        source="topics"
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
    </SimpleForm>
  </Edit>
);

export const MentorCreate = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="skills" />
      <TextInput source="linkedin" />
      <TextInput source="languages" />
    </SimpleForm>
  </Create>
);
