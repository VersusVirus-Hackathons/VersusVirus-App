import React from "react";
import styled from "styled-components";

const Base = styled.div`
  position: relative;
  background: white;
  padding: 10px;
  padding-bottom: 55px;
  box-shadow: 0px 0px 20px rgba(80, 85, 92, 0.2);
`;

const Thumbnail = styled.img`
  display: block;
  min-width: 30%;
  max-width: 30%;
`;

const Title = styled.h2`
  margin-bottom: 15px;
`;

const TextWrapper = styled.div`
  padding-left: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TopicTag = styled.div<{ color: String; backgroundColor: String }>`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin-top: 25px;
  padding: 5px 8px;
  background-color: ${(p) => p.backgroundColor};
  color: ${(p) => p.color};
  border-radius: 13px;
`;

export interface SubmittedProjectOverviewProps {
  style?: {};
  className?: string;
  title: string;
  tagline: string;
  thumbnail?: string;
  topic: string;
  backgroundColor: string;
  color: string;
}

const SubmittedProjectOverview: React.FC<SubmittedProjectOverviewProps> = ({
  style,
  className,
  title,
  tagline,
  thumbnail,
  topic,
  color,
  backgroundColor,
}) => {
  return (
    <Base style={style} className={className}>
      <CardWrapper>
        <Thumbnail src={thumbnail} alt="" />
        <TextWrapper>
          <Title>{title}</Title>
          <p>
            {tagline.slice(0, 100)}
            {tagline.length > 100 ? "..." : ""}
          </p>
        </TextWrapper>
      </CardWrapper>
      <TopicTag color={color} backgroundColor={backgroundColor}>
        {topic}
      </TopicTag>
    </Base>
  );
};

export default SubmittedProjectOverview;
