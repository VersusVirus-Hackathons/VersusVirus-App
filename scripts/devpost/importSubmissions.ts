import prisma from "../../prisma/prisma";
import {
  SubmissionRow,
  getParsedCsvRows,
  SubmissionUserRow,
  SubmissionChallengeRow,
} from "./csvParser";
import {
  SubmissionChallengeCreateOneWithoutSubmissionInput,
  SubmissionCreateInput,
} from "@prisma/client";
import moment from "moment";

function mapChallenge({
  id,
  ...rest
}: SubmissionChallengeRow): SubmissionChallengeCreateOneWithoutSubmissionInput {
  return {
    create: rest,
  };
}

async function mapUser(row: SubmissionUserRow) {
  const user = await prisma.submissionUser.findOne({
    where: {
      email: row.email,
    },
  });
  return user
    ? {
        connect: {
          id: user.id,
        },
      }
    : {
        create: {
          ...row,
        },
      };
}

async function mapTeamMembers(rows: SubmissionUserRow[]) {
  let teamMembers = {
    create: [],
    connect: [],
  };
  for (const row of rows) {
    const userInput = await mapUser(row);
    if (userInput.connect) {
      teamMembers.connect.push(userInput.connect);
    } else {
      teamMembers.create.push(userInput.create);
    }
  }
  // prisma doesn't like empty arrays in nested writes
  if (teamMembers.create.length === 0) {
    delete teamMembers.create;
  }
  if (teamMembers.connect.length === 0) {
    delete teamMembers.connect;
  }
  return teamMembers;
}

async function mapSubmission({
  id,
  challenge,
  teamMembers = [],
  submitter,
  additionalTeamMemberCount,
  createdAt,
  ...rest
}: SubmissionRow): Promise<SubmissionCreateInput> {
  return {
    ...rest,
    additionalTeamMemberCount: parseInt(additionalTeamMemberCount),
    createdAt: moment(createdAt, "DD/MM/YYYY hh:mm:ss").toISOString(),
    challenge: mapChallenge(challenge),
    submitterEmail: submitter.email,
    teamMembers: await mapTeamMembers(teamMembers),
  };
}

async function createSubmission(row: SubmissionRow) {
  const data = await mapSubmission(row);
  console.log(data.title);
  return prisma.submission.create({ data });
}

async function importSubmissions() {
  const rows = await getParsedCsvRows();
  console.log(`Importing ${rows.length} submissions`);
  for (const row of rows) {
    await createSubmission(row);
  }
}

export default importSubmissions;
