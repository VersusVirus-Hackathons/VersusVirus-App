import PageLayout from "../../../src/modules/layout/components/PageLayout";
import { useRouter } from "next/router";
import ProjectDetail from "../../../src/modules/project/components/ProjectDetail";

import useMyProject from "../../../src/modules/project/hooks/useMyProject";
import { LinkButton } from "../../../src/modules/core/components/Button";
import Spacer from "../../../src/modules/layout/components/Spacer";
import Link from "next/link";
import ProjectSubmission from "../../../src/modules/project/components/ProjectSubmission";

export default () => {
  const { project, loading } = useMyProject();

  return (
    <PageLayout>
      <ProjectSubmission />
      {/* {loading ? null : project?.id ? (
        <>
          <Link href="/team/project/edit">
            <LinkButton>Edit the Project</LinkButton>
          </Link>
          <Spacer unit={2} />
          <ProjectDetail projectId={project.id} />
        </>
      ) : (
        <Link href="/team/project/edit">
          <LinkButton>Create Project</LinkButton>
        </Link>
      )} */}
    </PageLayout>
  );
};
