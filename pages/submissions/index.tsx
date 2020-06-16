import React from "react";
import PublicPageLayout from "../../src/modules/layout/components/PublicPageLayout";
import SubmittedProjectList from "../../src/modules/submittedProject/components/SubmittedProjectList";

export default () => {
  return (
    <PublicPageLayout title="Explore projects from the #versusvirus hackathon">
      <SubmittedProjectList />
    </PublicPageLayout>
  );
};
