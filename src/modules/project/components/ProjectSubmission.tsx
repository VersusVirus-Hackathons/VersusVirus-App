import { useMutation } from "@apollo/client";
import { ProjectCreateInput } from "@prisma/client";
import omit from "lodash/omit";
import React, { useRef, useState } from "react";
import SimpleSchema from "simpl-schema";
import styled from "styled-components";
import { AutoForm, connectField } from "uniforms";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import {
  AutoField,
  AutoFields,
  ErrorsField,
  LongTextField,
  SubmitField,
} from "uniforms-material";
import Spacer from "../../layout/components/Spacer";
import { UpdateProjectMutation } from "../hooks/projectMutation";
import useMyProject from "../hooks/useMyProject";
import { UpdateProject, UpdateProjectVariables } from "./types/UpdateProject";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { InputLabel } from "@material-ui/core";
import ContentPadding from "../../layout/components/ContentPadding";

const ImageField = dynamic({
  loader: () => import("../../form/components/ImageField"),
  ssr: false,
});

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
      rows: 1,
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
  description: {
    type: String,
    label: "Description",
    uniforms: {
      component: LongTextField,
      rows: 12,
    },
  },
  technologiesUsed: {
    label: "What are the technologies that you have used?",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 4,
    },
  },
  obstacles: {
    label: "What are the most difficult things that you have faced?",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  accomplishments: {
    label: "What are the accomplishments that you are proud of?",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  learnings: {
    label: "What have you learned?",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 8,
    },
  },
  nextSteps: {
    label: "What are the next steps for your project?",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  imagesBase64: {
    label: "Upload images by clicking the + button below.",
    type: Array,
    required: false,
  },
  "imagesBase64.$": {
    type: String,
    required: false,
    uniforms: {
      component: connectField(ImageField),
    },
  },
  urls: {
    type: Array,
    label: "Add URLs by clicking the + button below.",
  },
  "urls.$": {
    type: String,
  },
  videoUrl: {
    type: String,
    label: "Video URL",
    required: false,
  },
  relevanceToHackathon: {
    label: "Relevance for Swiss ecosystem and current situation with COVID-19",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  relevanceToChallenge: {
    label: "Relevance of the solution addressing the specific challenge",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  longTermImpact: {
    label: "Potential for impact on the long term",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  progressDuringHackathon: {
    label: "Progress during this hackathon",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
  valueAdded: {
    label: "Project added value",
    type: String,
    uniforms: {
      component: LongTextField,
      rows: 6,
    },
  },
};

const schema = new SimpleSchema(schemaDefinition as any);
const schemaBridge = new SimpleSchema2Bridge(schema);

const Base = styled.div``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  margin-top: 17px;
  margin-bottom: 10px;
`;

export interface ProjectSubmissionProps {
  style?: {};
  className?: string;
}

const ProjectSubmission: React.FC<ProjectSubmissionProps> = ({
  style,
  className,
}) => {
  const { project, teamId, challengeId, loading, refetch } = useMyProject();
  const router = useRouter();
  const ref = useRef<any>();
  const [success, setSuccess] = useState<boolean>();
  const [updateMutation] = useMutation<UpdateProject, UpdateProjectVariables>(
    UpdateProjectMutation,
  );

  if (!teamId || !challengeId || loading) {
    return null;
  }

  if (loading) {
    return <div>wait ... we are getting some stuff</div>;
  }

  const schemaBridge = new SimpleSchema2Bridge(schema);

  return (
    <Base style={style} className={className}>
      <ContentPadding>
        {success ? (
          <div>💪Thank you!</div>
        ) : (
          <div>
            <Title>Project Details</Title>
            <AutoForm
              disabled={project.isPublished}
              ref={ref}
              model={{
                ...project,
                imagesBase64: project?.images?.map((image) => image.base64),
                urls: project?.urls,
                thumbnail: project?.thumbnail?.base64,
              }}
              schema={schemaBridge}
              onSubmit={async ({
                __typename,
                imagesBase64,
                urls,
                thumbnail,
                ...model
              }) => {
                await refetch();

                const data = {
                  ...(model as ProjectCreateInput),
                  images:
                    imagesBase64?.length > 0
                      ? {
                          create: imagesBase64.map((image) => ({
                            base64: image,
                          })),
                        }
                      : {},
                  urls,
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

                const currentImages = project.images;
                // we first delete all images
                if (currentImages?.length > 0) {
                  await updateMutation({
                    variables: {
                      projectId: project.id,
                      data: {
                        images: {
                          deleteMany: currentImages.map((image) => ({
                            id: {
                              equals: image.id,
                            },
                          })),
                        },
                      },
                    },
                  });
                }
                await updateMutation({
                  variables: {
                    projectId: project.id,
                    data: {
                      ...(data.thumbnail ? data : omit(data, ["thumbnail"])),
                      challenge: { connect: { id: challengeId } },
                      team: { connect: { id: teamId } },
                      urls: { set: data.urls },
                    },
                  },
                });
                setSuccess(true);
                router.push("/");
              }}
            >
              <AutoFields fields={["title", "tagline"]} />
              <Spacer unit={1} />
              <InputLabel htmlFor="thumbnail">
                {schemaDefinition.thumbnail.label}
              </InputLabel>
              <Spacer unit={1} />
              <AutoField name="thumbnail" id="tthumbnail" />
              <Spacer unit={1} />
              <AutoFields
                fields={[
                  "description",
                  "technologiesUsed",
                  "obstacles",
                  "accomplishments",
                  "learnings",
                  "nextSteps",
                ]}
              />
              <Spacer unit={2} />
              <Title>Image Gallery</Title>
              <AutoField name="imagesBase64" />
              {project?.id ? (
                <>
                  <Title>Pitch Video</Title>
                  <AutoField name="videoUrl" />
                  <Spacer unit={2} />
                  <Title>Further Resources</Title>
                  <Description>
                    Please provide further links to the sources of documentation
                    for your project.
                  </Description>
                  <AutoField name="urls" />

                  <Title>Assessment Criteria</Title>
                  <Description>
                    We ask each team to help the jury by providing some
                    information about our five criteria.
                  </Description>
                  <AutoFields
                    fields={[
                      "relevanceToHackathon",
                      "relevanceToChallenge",
                      "longTermImpact",
                      "progressDuringHackathon",
                      "valueAdded",
                    ]}
                  />
                </>
              ) : null}
              <ErrorsField />
              <Spacer unit={2} />
              {!project.isPublished ? <SubmitField>Save</SubmitField> : null}
            </AutoForm>
          </div>
        )}
      </ContentPadding>
    </Base>
  );
};

export default ProjectSubmission;
