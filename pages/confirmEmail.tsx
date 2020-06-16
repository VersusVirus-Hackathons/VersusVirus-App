import React from "react";
import PageLayout from "../src/modules/layout/components/PageLayout";
import ConfirmEmail from "../src/modules/user/components/ConfirmEmail";
import ContentPadding from "../src/modules/layout/components/ContentPadding";

export default () => {
  return (
    <PageLayout>
      <ContentPadding>
        <ConfirmEmail />
      </ContentPadding>
    </PageLayout>
  );
};
