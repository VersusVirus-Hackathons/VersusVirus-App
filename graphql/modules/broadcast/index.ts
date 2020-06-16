import { mutationType, stringArg, objectType, extendType } from "@nexus/schema";
import sendEmail from "../email/sendEmail";

export const SendEmailToAllUserResult = objectType({
  name: "SendEmailToAllUserResult",
  definition(t) {
    t.int("emailsSent");
  },
});
export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("sendEmailToAllUser", {
      args: {
        text: stringArg(),
        subject: stringArg(),
      },
      type: SendEmailToAllUserResult,

      async resolve(root, { text, subject }, { prisma }) {
        let count = 0;

        const users = await prisma.user.findMany({ where: {} });

        for (const user of users) {
          console.log("sending email " + count + " of " + users.length);
          await sendEmail({
            to: user.email,
            subject,
            text,
          });

          try {
            count++;
          } catch (e) {}
        }
        return { emailsSent: count };
      },
    });
  },
});
