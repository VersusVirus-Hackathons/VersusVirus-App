import prisma from "../prisma/prisma";
import uniq from "lodash/uniq";
import { getDoc } from "./spreadsheet";
export default async () => {
  const mentorsDoc = await getDoc(process.env.GOOGLE_SPREADSHEET_MENTORS);

  const sheet = mentorsDoc.sheetsByIndex[0];

  const rows = await sheet.getRows({ limit: 100000 });

  for (let row of rows) {
    const mentorTopics = uniq([
      row["Mentorship Category (1st priority)"].trim(),
      row["Mentorship Category (2nd priority)"].trim(),
    ]);

    const relatedTopics = await prisma.hackerTopic.findMany({
      where: {
        title: {
          in: mentorTopics,
        },
      },
    });
    if (mentorTopics.length !== relatedTopics.length) {
      const missingTopics = mentorTopics.filter(
        (topic) => !relatedTopics.some((t) => t.id === topic),
      );
      console.warn(row.Email, "missing topics:", missingTopics.join("|"));
    }

    await prisma.mentor.upsert({
      where: {
        email: row.Email,
      },
      create: {
        email: row.Email,
        name: row["Last Name"],
        skills: row["What skills / expertise could you offer?"],
        linkedin: row["Linkedin or Social Media Profile"],
        languages: row.Language,
        topics: {
          connect: relatedTopics.map((topic) => ({
            id: topic.id,
          })),
        },
      },
      update: {},
    });
  }
};
