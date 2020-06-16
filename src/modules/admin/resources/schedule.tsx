import React, { Component } from "react";

import {
  Edit,
  TextInput,
  SimpleForm,
  List,
  Admin,
  Resource,
  Create,
  DateInput,
  DateTimeInput,
  DateField,
  Datagrid,
  TextField,
  EditButton,
  SelectInput,
  Filter,
} from "react-admin";

const ScheduleFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Title" source="title" alwaysOn />
  </Filter>
);

export const ScheduleList = (props) => (
  <List {...props} filters={<ScheduleFilter />} perPage={20}>
    <Datagrid>
      <DateField showTime source="from" />
      <DateField showTime source="to" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const ScheduleTitle = ({ record }: any) => {
  return <span>Schedule {record ? `"${record.title}"` : ""}</span>;
};

export const ScheduleEdit = (props) => (
  <Edit title={<ScheduleTitle />} {...props}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <TextInput source="title" fullWidth />
      <DateTimeInput source="from" />
      <DateTimeInput source="to" />
      <SelectInput
        source="type"
        choices={[
          {
            id: "EXTERNAL_LINK",
            name: "external Link",
          },
          {
            id: "INTERNAL_LINK",
            name: "Internal Link",
          },
        ]}
      />
      <TextInput source="data" fullWidth multiline />
      <TextInput source="color" fullWidth />
    </SimpleForm>
  </Edit>
);

export const ScheduleCreate = (props) => (
  <Create title="Create a Schedule" {...props}>
    <SimpleForm variant="outlined">
      <TextInput source="title" fullWidth />
      <DateTimeInput source="from" />
      <DateTimeInput source="to" />
      <SelectInput
        source="type"
        choices={[
          {
            id: "EXTERNAL_LINK",
            name: "external Link",
          },
          {
            id: "INTERNAL_LINK",
            name: "Internal Link",
          },
        ]}
      />
      <TextInput source="data" fullWidth multiline />
      <TextInput source="color" fullWidth />
    </SimpleForm>
  </Create>
);
