import nodemailer from "nodemailer";

let mailServerConfig;
try {
  mailServerConfig = JSON.parse(process.env.MAIL_SERVER);
} catch (e) {}

const transport = nodemailer.createTransport({
  host: mailServerConfig?.host,
  port: mailServerConfig?.port,
  auth: mailServerConfig?.auth,
});

const sendEmail = async ({
  from = "noreply@versusvirus.ch",
  to,
  text,
  subject,
}: {
  from?: string;
  to: string;
  text: string;
  subject: string;
}) => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test" ||
    !transport
  ) {
    console.log("=================================================");
    console.log(`EMAIL to ${to}, from ${from}`);
    console.log(`SUBJECT: ${subject}`);
    console.log(text);
    console.log("=================================================");
    return Promise.resolve();
  } else {
    return transport.sendMail({
      from,
      to,
      text,
      subject,
    });
  }
};

export default sendEmail;
