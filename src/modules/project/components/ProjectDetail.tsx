import React from "react";
import styled from "styled-components";
import useProject from "../hooks/useProject";
import Spacer from "../../layout/components/Spacer";

const Base = styled.div``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  margin-top: 17px;
  margin-bottom: 10px;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const LinkWrapper = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`;

const Link = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #e71d29;
`;

export interface ProjectDetailProps {
  style?: {};
  className?: string;
  projectId: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  style,
  className,
  projectId,
}) => {
  const { project } = useProject({ projectId });
  if (!project) {
    return null;
  }
  return (
    <Base style={style} className={className}>
      <Title>{project.title}</Title>
      <Description>{project.tagline}</Description>
      <Spacer unit={2} />
      <Title>What does it do?</Title>
      <Description>{project.description}</Description>
      <Spacer unit={2} />
      <Title>What are the technologies that you have used?</Title>
      <Description>{project.technologiesUsed}</Description>
      <Spacer unit={2} />
      <Title>What are the accomplishments that you are proud of?</Title>
      <Description>{project.accomplishments}</Description>
      <Spacer unit={2} />
      <Title>What are the challanges that you ran into?</Title>
      <Description>{project.obstacles}</Description>
      <Spacer unit={2} />
      <Title>What have you learnt?</Title>
      <Description>{project.learnings}</Description>
      <Spacer unit={2} />
      {project.videoUrl ? (
        <>
          <Title>Video</Title>
          <video>
            <source src={project.videoUrl} />
          </video>
        </>
      ) : null}
      <Spacer unit={2} />
      <Title>Gallery</Title>
      <Spacer unit={2} />
      {project.images.length > 0 ? (
        <ImageGallery>
          {project.images.map((image) => (
            <Image key={image.id} src={image.base64} />
          ))}
        </ImageGallery>
      ) : null}
      <Spacer unit={2} />
    </Base>
  );
};

export default ProjectDetail;
