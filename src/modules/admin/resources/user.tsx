import React from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  SelectArrayInput,
  ReferenceInput,
  ReferenceArrayInput,
  ReferenceField,
  Datagrid,
  TextField,
  EditButton,
  SelectInput,
  Filter,
} from "react-admin";
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Email" source="email" alwaysOn />
    <TextInput label="Firstname" source="firstname" alwaysOn />
    <TextInput label="Lastname" source="lastname" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />} perPage={20}>
    <Datagrid>
      <TextField source="email" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }: any) => {
  return <span>User {record ? `"${record.email}"` : ""}</span>;
};

export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props} undoable={false}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <TextInput source="email" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <SelectArrayInput
        source="languages"
        choices={["de", "fr", "it", "en"].map((l) => ({ id: l, name: l }))}
      />
      <ReferenceInput label="Team" source="team" reference="Team" allowEmpty>
        <TextInput optionText="id" />
      </ReferenceInput>
      <ReferenceField label="Team" source="team" reference="Team">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceArrayInput
        label="Roles"
        source="roles"
        reference="UserRole"
        allowEmpty
      >
        <SelectArrayInput optionText="id" />
      </ReferenceArrayInput>
      <ReferenceInput
        allowEmpty
        label="Preferred Challenge"
        source="preferredChallenge"
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
    </SimpleForm>
  </Edit>
);

/*
export const UserCreate = props => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiLine: true }} />
      <TextInput multiline source="body" />
      <TextInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
    </SimpleForm>
  </Create>
);
*/
