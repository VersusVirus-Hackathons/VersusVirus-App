import React from "react";
import styled from "styled-components";
import useSubmittedProjects from "../hooks/useSubmitttedProjects";
import HackerTopicSelect from "../../mentors/components/HackerTopicSelect";
import SubmittedProjectOverview from "./SubmittedProjectOverview";
import mediaQueries from "../../../utils/mediaQueries";
import Link from "next/link";
import topicColorSchema from "./topicColorSchema.json";

const Base = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 100px 0;
`;

const FilterWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

const ProjectOverview = styled(SubmittedProjectOverview)`
  width: 100%;
  height: 100%;
`;

export interface SubmittedProjectListProps {
  style?: {};
  className?: string;
}

const A = styled.a`
  width: calc(50% - 8px);
  text-decoration: none;
  color: inherit;
  margin-bottom: 16px;
`;

const SubmittedProjectList: React.FC<SubmittedProjectListProps> = ({
  style,
  className,
}) => {
  const [topicId, setTopicId] = React.useState<string>("");
  const { submittedProjects, loading } = useSubmittedProjects({ topicId });

  return (
    <Base style={style} className={className}>
      <FilterWrapper>
        <HackerTopicSelect
          value={topicId}
          onChange={setTopicId}
          isCustomized={true}
        />
      </FilterWrapper>
      <Content>
        {submittedProjects?.map((project) => {
          const topicStyle = topicColorSchema.topics.find(
            (topic) => topic.id === project.challenge?.primaryTopic?.id,
          );
          return (
            <Link href={`/submissions/${project.id}`} key={project.id} passHref>
              <A>
                <ProjectOverview
                  title={project.title}
                  tagline={project.tagline}
                  thumbnail={project.thumbnail?.base64}
                  topic={project.challenge?.primaryTopic?.title}
                  color={topicStyle?.color ?? "#fff"}
                  backgroundColor={topicStyle?.backgroundColor ?? "#ff0000"}
                />
              </A>
            </Link>
          );
        })}
      </Content>
    </Base>
  );
};

export default SubmittedProjectList;
