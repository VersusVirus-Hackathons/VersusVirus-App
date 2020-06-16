/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HackerTopicsFragment
// ====================================================

export interface HackerTopicsFragment_slack {
  __typename: "SlackConversation";
  url: string;
}

export interface HackerTopicsFragment {
  __typename: "HackerTopic";
  id: string;
  title: string;
  description: string;
  slack: HackerTopicsFragment_slack | null;
}
