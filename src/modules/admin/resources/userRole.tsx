import React from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  SelectArrayInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectInput,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
} from "react-admin";

export const RoleList = (props) => (
  <List {...props} perPage={20}>
    <Datagrid>
      <TextField source="id" />
      <EditButton />
    </Datagrid>
  </List>
);

export const RoleEdit = (props) => (
  <Edit {...props} undoable={false}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />

      <ReferenceArrayInput
        label="Users"
        source="users"
        reference="User"
        fullWidth
      >
        <SelectArrayInput
          fullWidth
          optionText={(e) => {
            return e?.email ?? "NOT FOUND";
          }}
        />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const RoleCreate = (props) => (
  <Create title="Create a Role" {...props}>
    <SimpleForm>
      <TextInput source="id" />
    </SimpleForm>
  </Create>
);
