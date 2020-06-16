import sendEmail from "./sendEmail";

test("sends and email", async (done) => {
  await sendEmail({
    to: "hans.muster@example.com",
    text: "text",
    subject: "subject",
  });
  done();
});
