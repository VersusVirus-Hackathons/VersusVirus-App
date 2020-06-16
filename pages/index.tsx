import React from "react";

import PageLayout from "../src/modules/layout/components/PageLayout";
import Home from "../src/modules/home/components/Home";

function IndexPage() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

IndexPage.getInitialProps = async () => {};

export default IndexPage;
