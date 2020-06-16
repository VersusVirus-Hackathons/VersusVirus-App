import { useRouter } from "next/router";
import PageLayout from "../../src/modules/layout/components/PageLayout";
import ProjectDetail from "../../src/modules/project/components/ProjectDetail";

export default () => {
  const { query } = useRouter();
  const projectId = query.projectId as string;
  return (
    <PageLayout>
      <ProjectDetail projectId={projectId} />
    </PageLayout>
  );
};
