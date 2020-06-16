import { stripIndents } from "common-tags";
import sendEmail from "./sendEmail";
import {
  parseEmailsFromString,
  capitalizedFullName,
} from "../../../src/utils/stringUtils";

const asyncForEach = async (list: any[], callback: Function): Promise<void> => {
  for (let index = 0; index < list.length; index++) {
    await callback(list[index], index, list);
  }
};

export function teamMemberActivationEmail(to, senderName) {
  return {
    to,
    subject: "#VersusVirus Online Hackathon",

    text: stripIndents`
    Good news: ${senderName} signed up for the #VersusVirus Online Hackathon and expressed their wish to be in a team together with you.

    We at #VersusVirus are connecting like-minded people and organizations all over Switzerland to develop, scale and celebrate solutions against the Corona crisis. https://www.versusvirus.ch
    
    We would love for you to join too. Head over to the following link to sign up, and we will put you in a team together with ${senderName}. https://app.versusvirus.ch/signup
    
    Hope to see you at the hackathon! 
    the #VersusVirus Team


    `,
  };
}

export default async function sendTeamMemberActivationEmail(
  firstname: string,
  lastname: string,
  possibleTeamMemberEmails: string,
) {
  const emails: string[] | null = parseEmailsFromString(
    possibleTeamMemberEmails,
  );

  if (!emails || emails.length === 0) return Promise.resolve(0);

  const senderName = capitalizedFullName(firstname, lastname);
  return asyncForEach(emails, async (to) => {
    await sendEmail(teamMemberActivationEmail(to, senderName));
  });
}
