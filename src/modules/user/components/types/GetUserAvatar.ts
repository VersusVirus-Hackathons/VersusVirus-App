/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserAvatar
// ====================================================

export interface GetUserAvatar_user_profilePhoto {
  __typename: "Image";
  id: string;
  base64: string;
}

export interface GetUserAvatar_user {
  __typename: "User";
  id: string;
  profilePhoto: GetUserAvatar_user_profilePhoto | null;
}

export interface GetUserAvatar {
  user: GetUserAvatar_user | null;
}

export interface GetUserAvatarVariables {
  userId: string;
}
