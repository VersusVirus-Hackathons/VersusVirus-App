import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { GetUserAvatar, GetUserAvatarVariables } from "./types/GetUserAvatar";

const Avatar = styled.img`
  width: 89px;
  height: 77px;
  object-fit: contain;
`;

export interface UserAvatarProps {
  style?: {};
  className?: string;
  userId: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  style,
  className,
  userId,
}) => {
  const { data } = useQuery<GetUserAvatar, GetUserAvatarVariables>(
    gql`
      query GetUserAvatar($userId: String!) {
        user(where: { id: $userId }) {
          id
          profilePhoto {
            id
            base64
          }
        }
      }
    `,
    {
      variables: {
        userId,
      },
    },
  );
  return data?.user?.profilePhoto?.base64 ? (
    <Avatar
      style={style}
      className={className}
      src={data?.user?.profilePhoto?.base64}
    />
  ) : null;
};

export default UserAvatar;
