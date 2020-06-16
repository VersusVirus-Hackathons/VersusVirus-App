import csv from "csvtojson";
import { Submission } from "@prisma/client";

const CSV_FILE_PATH = "./submissions.csv";

const CSV_OPTIONS = {
  delimiter: ",",
};

export type SubmissionRow = {
  id: string;
  title: string;
  url: string;
  tagline: string;
  createdAt: string;
  description: string;
  video: string | null;
  website: string | null;
  file: string | null;
  desiredPrizes: string | null;
  builtWith: string | null;
  slackChannel: string | null;
  relevanceForEco: string | null;
  relevanceForChallenge: string | null;
  potentialForImpact: string | null;
  progressAchieved: string | null;
  projectAddedValue: string | null;
  projectContinuation: string | null;
  projectPlans: string | null;
  teamMembersScreen: string;
  collegeUniversitiesOfTeamMembers: string | null;
  additionalTeamMemberCount: string;
  submitter: SubmissionUserRow;
  teamMembers: SubmissionUserRow[];
  challenge: SubmissionChallengeRow;
};

export type SubmissionChallengeRow = {
  id: string;
  title: string;
  description: string | null;
  topic: string | null;
};

export type SubmissionUserRow = {
  email: string;
  firstName: string;
  lastName: string;
  screenName: string;
};

export async function getParsedCsvRows(): Promise<SubmissionRow[]> {
  return csv(CSV_OPTIONS).fromFile(CSV_FILE_PATH);
}
