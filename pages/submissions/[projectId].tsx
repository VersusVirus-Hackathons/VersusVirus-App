import React from "react";
import PublicPageLayout from "../../src/modules/layout/components/PublicPageLayout";
import SubmittedProject from "../../src/modules/submittedProject/components/SubmittedProject";
import { useRouter } from "next/router";
import project from "../team/project";
import useProject from "../../src/modules/project/hooks/useProject";
import topicColorSchema from "../../src/modules/submittedProject/components/topicColorSchema.json";

export default () => {
  const { query } = useRouter();
  const projectId = query.projectId as string;
  const { project } = useProject({ projectId });
  const topicStyle = topicColorSchema.topics.find(
    (topic) => topic.id === project?.challenge?.primaryTopic?.id,
  );

  if (!project) {
    return null;
  }

  return (
    <PublicPageLayout
      title={project.title}
      color={topicStyle?.color}
      backgroundColor={topicStyle?.backgroundColor}
      tagTitle={project?.challenge?.primaryTopic?.title}
    >
      <SubmittedProject project={project} />
    </PublicPageLayout>
  );
};
