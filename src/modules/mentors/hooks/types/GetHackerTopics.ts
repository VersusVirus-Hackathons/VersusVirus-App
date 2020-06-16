/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHackerTopics
// ====================================================

export interface GetHackerTopics_hackerTopics_slack {
  __typename: "SlackConversation";
  url: string;
}

export interface GetHackerTopics_hackerTopics {
  __typename: "HackerTopic";
  id: string;
  title: string;
  description: string;
  slack: GetHackerTopics_hackerTopics_slack | null;
}

export interface GetHackerTopics {
  hackerTopics: GetHackerTopics_hackerTopics[];
}
