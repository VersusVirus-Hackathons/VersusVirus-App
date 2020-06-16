import prisma from "../prisma/prisma";
import { getDoc } from "./spreadsheet";

export default async () => {
  const challengesDoc = await getDoc(process.env.GOOGLE_SPREADSHEET_CHALLENGES);

  const sheet = challengesDoc.sheetsByIndex[0];

  const rows = await sheet.getRows({ limit: 100000 });
  let count = 0;
  for (let challenge of rows) {
    count++;
    try {
      const primaryTopic = await prisma.hackerTopic.findOne({
        where: {
          title: challenge["Topic Tags"].trim(),
        },
      });
      if (!primaryTopic) {
        return console.warn(
          "unkown topic " + count + ", " + challenge["Topic Tags"],
        );
      }

      await prisma.challenge.upsert({
        where: {
          title: challenge["Challenge Title"],
        },
        create: {
          title: challenge["Challenge Title"],
          challenge: challenge.Challenge,
          context: challenge.Context,
          solution: challenge["Potential Solution"],
          resources: challenge["Needed Resources"],
          organization: challenge["Organisation / Special Tag"],
          commentsByTeam: challenge["Comments by curation team"],
          contactEmail: challenge["Email  of Ideator(s)"],
          contactName: challenge["Name of Ideator(s)"],
          primaryTopic: primaryTopic
            ? {
                connect: {
                  id: primaryTopic?.id,
                },
              }
            : {},
        },
        update: {},
      });
    } catch (e) {
      console.warn("could not import row " + challenge["Challenge Title"]);
      console.log(e);
    }
  }
};
