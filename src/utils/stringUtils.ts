import capitalize from "string-capitalize-name";

export function parseEmailsFromString(str: string): Array<string> {
  // Minimalistic email validation from https://regexr.com/2ri2c
  const emailAddresses = str.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
  if (emailAddresses === null) return null;
  return emailAddresses.map((s) => s.toLocaleLowerCase());
}

export function capitalizedFullName(firstname, lastname) {
  return capitalize(`${firstname} ${lastname}`);
}
