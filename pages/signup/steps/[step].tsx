import PageLayout from "../../../src/modules/layout/components/PageLayout";

import { useRouter } from "next/router";
import Signup from "../../../src/modules/signup/components/Signup";

export default () => {
  const router = useRouter();

  return (
    <PageLayout>
      <Signup step={router.query.step as string} />
    </PageLayout>
  );
};
