// tslint:disable-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react";
import React from "react";
import SubmittedProject from "../SubmittedProject";

storiesOf("submittedProject/SubmittedProject", module).add(
  "default view",
  () => (
    <SubmittedProject
      project={{
        __typename: "Project",
        id: "1",
        title: "title",
        tagline: "tagline",
        thumbnail: null,
        description: "description",
        technologiesUsed: null,
        obstacles: null,
        accomplishments: null,
        learnings: null,
        nextSteps: null,
        videoUrl: null,
        urls: null,
        images: null,
        isPublished: false,
        relevanceToHackathon: null,
        relevanceToChallenge: null,
        longTermImpact: null,
        progressDuringHackathon: null,
        valueAdded: null,
        challenge: {
          __typename: "Challenge",
          id: "123",
          primaryTopic: {
            __typename: "HackerTopic",
            id: "afterthecrisis",
            title: "After the Crisis",
          },
        },
      }}
    />
  ),
);
