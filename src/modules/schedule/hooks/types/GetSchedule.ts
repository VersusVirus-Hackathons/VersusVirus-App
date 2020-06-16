/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ScheduleType } from "./../../../../types/global-types";

// ====================================================
// GraphQL query operation: GetSchedule
// ====================================================

export interface GetSchedule_schedules {
  __typename: "Schedule";
  id: string;
  from: any;
  to: any;
  title: string;
  type: ScheduleType;
  data: string;
  color: string | null;
}

export interface GetSchedule {
  schedules: GetSchedule_schedules[];
}
