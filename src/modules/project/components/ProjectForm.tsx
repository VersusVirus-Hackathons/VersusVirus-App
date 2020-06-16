import { useMutation } from "@apollo/client";
import omit from "lodash/omit";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import SimpleSchema from "simpl-schema";
import styled from "styled-components";
import { connectField } from "uniforms";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import {
  AutoField,
  AutoForm,
  ErrorsField,
  LongTextField,
  SubmitField,
} from "uniforms-material";
import { ProjectCreateInput } from "../../../types/global-types";
import ContentPadding from "../../layout/components/ContentPadding";
import Spacer from "../../layout/components/Spacer";
import {
  CreateProjectMutation,
  UpdateProjectMutation,
} from "../hooks/projectMutation";
import useMyProject from "../hooks/useMyProject";
import { CreateProject, CreateProjectVariables } from "./types/CreateProject";
import { UpdateProject, UpdateProjectVariables } from "./types/UpdateProject";

const ImageField = dynamic({
  loader: () => import("../../form/components/ImageField"),
  ssr: false,
});

export interface ProjectFormProps {
  style?: {};
  className?: string;
}

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  margin-top: 17px;
  margin-bottom: 10px;
`;

const schemaDefinition = {
  title: {
    type: String,
    label: "Project name",
  },
  tagline: {
    type: String,
    label: "Tagline",
    uniforms: {
      component: LongTextField,
      rows: 2,
    },
  },
  thumbnail: {
    type: String,
    label: "Thumbnail",
    required: false,
    uniforms: {
      component: connectField(ImageField),
    },
  },
};

const schema = new SimpleSchema(schemaDefinition as any);

const schemaBridge = new SimpleSchema2Bridge(schema);

const ProjectForm: React.FC<ProjectFormProps> = ({ style, className }) => {
  const { project, teamId, challengeId, loading, refetch } = useMyProject();
  const ref = useRef<any>();
  const router = useRouter();
  const [createMutation] = useMutation<CreateProject, CreateProjectVariables>(
    CreateProjectMutation,
  );
  const [updateMutation] = useMutation<UpdateProject, UpdateProjectVariables>(
    UpdateProjectMutation,
  );

  if (!teamId || loading) {
    return null;
  }

  if (!challengeId) {
    return (
      <ContentPadding>
        <Title>No Challenge</Title>
        <Description>
          Before creating a project you need to select a challenge
        </Description>
      </ContentPadding>
    );
  }

  return (
    <ContentPadding>
      <Title>Your Project</Title>
      <Description>
        This area is meant to collect the outcomes of your team during the
        #VersusVirus Hackathon.
      </Description>

      <AutoForm
        model={{
          ...omit(project, ["urls"]),
          thumbnail: project?.thumbnail?.base64,
        }}
        schema={schemaBridge}
        onSubmit={async ({ __typename, thumbnail, ...model }) => {
          await refetch();
          const data = {
            ...(model as ProjectCreateInput),
            ...(thumbnail
              ? {
                  thumbnail: project?.thumbnail
                    ? {
                        update: {
                          ...omit(project.thumbnail, ["__typename"]),
                          base64: thumbnail,
                        },
                      }
                    : { create: { base64: thumbnail } },
                }
              : project?.thumbnail?.base64
              ? { thumbnail: { delete: true } }
              : {}),
          };

          if (project?.id) {
            await updateMutation({
              variables: {
                projectId: project.id,
                data: {
                  ...data,
                },
              },
            });
            alert("successfully updated!");
            router.push("/");
          } else {
            await createMutation({
              variables: {
                data: {
                  ...data,
                  challenge: { connect: { id: challengeId } },
                  team: { connect: { id: teamId } },
                },
              },
            });
            alert("successfully created!");
            router.push("/");
          }
        }}
      >
        <AutoField name="title" />
        <AutoField name="tagline" />
        <Spacer unit={1} />
        <span>{schemaDefinition.thumbnail.label}</span>
        <Spacer unit={1} />
        <AutoField name="thumbnail" />
        <ErrorsField />
        <Spacer unit={2} />
        <SubmitField>{project?.id ? "save" : "create"}</SubmitField>
      </AutoForm>
    </ContentPadding>
  );
};

export default ProjectForm;
