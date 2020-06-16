import { stripIndents } from "common-tags";
import sendEmail from "./sendEmail";

export function welcomeEmail(
  to: string,
  name: string,
): {
  to: string;
  text: string;
  subject: string;
} {
  return {
    to,
    subject: "Welcome to the #VersusVirus Online Hackathon",

    text: stripIndents`
      Hello ${name},

      Thank you for signing up for the #VersusVirus Online Hackathon and for deciding to contribute with your innovative ideas and social power to help Switzerland get out of the crisis with new and creative energy.

      Great to have you on board!
      the #VersusVirus Team


    `,
  };
}

export default async function sendWelcomeEmail(to, name) {
  return await sendEmail(welcomeEmail(to, name));
}
