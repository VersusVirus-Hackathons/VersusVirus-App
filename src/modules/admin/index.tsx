import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard";
import {
  ChallengeCreate,
  ChallengeEdit,
  ChallengeList,
} from "./resources/challenge";
import {
  HackerTopicCreate,
  HackerTopicEdit,
  HackerTopicList,
} from "./resources/hackerTopic";
import { MentorCreate, MentorEdit, MentorList } from "./resources/mentor";
import { ProjectCreate, ProjectEdit, ProjectList } from "./resources/project";
import {
  ScheduleCreate,
  ScheduleEdit,
  ScheduleList,
} from "./resources/schedule";
import { TeamCreate, TeamEdit, TeamList } from "./resources/team";
import { UserEdit, UserList } from "./resources/user";
import { RoleCreate, RoleEdit, RoleList } from "./resources/userRole";
import useDataProvider from "./useDataProvider";
import styled from "styled-components";
import ContentPadding from "../../modules/layout/components/ContentPadding";
import PageLayout from "../../modules/layout/components/PageLayout";

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 100%;
  line-height: 1.2;
`;

const AdminApp = () => {
  const [dataProvider, isAdmin] = useDataProvider();

  if (!dataProvider) {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return (
      <PageLayout>
        <ContentPadding>
          <Title>Login</Title>
          <Text>
            Oops! It looks like your credentials are not valid. Please log in{" "}
            <a href="/">here</a>.
          </Text>
        </ContentPadding>
      </PageLayout>
    );
  }

  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="User" list={UserList} edit={UserEdit} />
      <Resource
        name="Schedule"
        list={ScheduleList}
        edit={ScheduleEdit}
        create={ScheduleCreate}
      />
      <Resource
        name="HackerTopic"
        list={HackerTopicList}
        edit={HackerTopicEdit}
        create={HackerTopicCreate}
      />
      <Resource
        name="Challenge"
        list={ChallengeList}
        edit={ChallengeEdit}
        create={ChallengeCreate}
      />
      <Resource
        name="UserRole"
        list={RoleList}
        edit={RoleEdit}
        create={RoleCreate}
      />
      <Resource
        name="Team"
        list={TeamList}
        edit={TeamEdit}
        create={TeamCreate}
      />
      <Resource
        name="Project"
        list={ProjectList}
        edit={ProjectEdit}
        create={ProjectCreate}
      />
      <Resource
        name="Mentor"
        list={MentorList}
        edit={MentorEdit}
        create={MentorCreate}
      />
    </Admin>
  );
};

export default AdminApp;
