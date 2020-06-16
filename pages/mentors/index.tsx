import PageLayout from "../../src/modules/layout/components/PageLayout";
import MentorList from "../../src/modules/mentors/components/MentorList";
import ContentPadding from "../../src/modules/layout/components/ContentPadding";

export default () => {
  return (
    <PageLayout>
      <ContentPadding>
        <MentorList />
      </ContentPadding>
    </PageLayout>
  );
};
