import PageLayout from "../../src/modules/layout/components/PageLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/signup/steps/[step]", "/signup/steps/1");
  }, []);
  return <PageLayout />;
};
