import React, { useState } from "react";
import styled from "styled-components";
import { ProjectDetails } from "../../../fragments/types/ProjectDetails";
import LinkIcon from "../../icons/components/LinkIcon";
import Spacer from "../../layout/components/Spacer";
import BackLink from "../../core/components/BackLink";
import ArrowLeft from "../../icons/components/ArrowLeft";
import GalleryLightbox from "../../core/components/GalleryLightbox";
import { useStoreState, useStoreActions } from "../../../model";

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
  padding-left: 20px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #50555c;
`;

const LinkIconStyled = styled(LinkIcon)`
  vertical-align: middle;
`;

const ContactLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: #50555c;
`;

export interface SubmittedProjectProps {
  style?: {};
  className?: string;
  project: ProjectDetails;
}

const SubmittedProject: React.FC<SubmittedProjectProps> = ({
  style,
  className,
  project,
}) => {
  const setIsLightboxOpen = useStoreActions(
    (s) => s.submittedProject.setIsLightboxOpen,
  );
  const photoIndex = useStoreState((s) => s.submittedProject.photoIndex);
  const setPhotoIndex = useStoreActions(
    (s) => s.submittedProject.setPhotoIndex,
  );
  const mailtoLink = `mailto:helpdesk@versusvirus.ch?subject=Contact%20Team%20%22${project.title}%22&body=Dear%20Versus%20Virus%20Helpdesk,%0D%0A%0D%0AI%20would%20like%20to%20contact%20the%20team%20that%20created%20the%20project%20%22${project.title}%22.%20Please%20put%20me%20in%20touch.%0D%0A%0D%0AThanks!%0D%0A`;
  return (
    <Base style={style} className={className}>
      <Title>Description</Title>
      <Description>{project.description}</Description>
      <Spacer unit={2} />
      <Title>Technologies used</Title>
      <Description>{project.technologiesUsed}</Description>
      <Spacer unit={2} />
      <Title>Accomplishments</Title>
      <Description>{project.accomplishments}</Description>
      <Spacer unit={2} />
      <Title>Obstacles</Title>
      <Description>{project.obstacles}</Description>
      <Spacer unit={2} />
      <Title>Learnings</Title>
      <Description>{project.learnings}</Description>
      <Spacer unit={2} />
      <Title>Next steps</Title>
      <Description>{project.nextSteps}</Description>
      <Spacer unit={2} />
      {project.videoUrl ? (
        <>
          <Title>Video</Title>
          <Spacer unit={1} />
          <LinkWrapper>
            <LinkIconStyled />
            <Link href={project.videoUrl}>{project.videoUrl}</Link>
          </LinkWrapper>
          <Spacer unit={2} />
        </>
      ) : null}
      {project.images.length > 0 ? (
        <>
          <Title>Gallery</Title>
          <Spacer unit={2} />
          <ImageGallery>
            {project.images.map((image, i) => (
              <Image
                key={image.id}
                src={image.base64}
                onClick={() => {
                  setIsLightboxOpen(true);
                  setPhotoIndex(i);
                }}
              />
            ))}
          </ImageGallery>
          <GalleryLightbox
            openingPhotoIndex={photoIndex}
            images={project.images.map((image) => image.base64)}
          />
          <Spacer unit={2} />
        </>
      ) : null}

      {project.urls.length > 0 ? (
        <>
          <Title>Sources</Title>
          <Spacer unit={2} />
          {project.urls.map((url) => (
            <LinkWrapper key={url}>
              <LinkIconStyled />
              <Link href={url}>{url}</Link>
            </LinkWrapper>
          ))}
          <Spacer unit={2} />
        </>
      ) : null}
      <Spacer unit={2} />
      <ContactLink href={mailtoLink}>Contact the team</ContactLink>
      <BackLink href="/submissions" icon={<ArrowLeft />}>
        Back to submissions
      </BackLink>
    </Base>
  );
};

export default SubmittedProject;
