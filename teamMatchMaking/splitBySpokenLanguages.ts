import { User } from "@prisma/client";

/**
 * Split pool of Users into groups speaking the same language.
 *
 * The priority given defines where speakers of multiple languages should be distributed to.
 * For example: if the priority is english, then a participant speaking both english and german should be distribtued to english.
 *
 * @param users
 * @param languagePriority
 */
export default function splitBySpokenLanguages(
  users: User[],
  languagePriority: string[],
): Array<{ language: string; users: User[] }> {
  if (languagePriority.length === 0 || languagePriority.includes("")) {
    throw new TypeError(
      "Missing list of languages ordered by priority (0 is the highest)",
    );
  }

  const usersToDistribute = [...users];
  const groups: Array<{ language: string; users: User[] }> = [];

  languagePriority.forEach((language) => {
    const group = {
      language,
      users: [],
    };

    usersToDistribute.forEach((user, index) => {
      if (user !== undefined && user.languages.includes(language)) {
        group.users.push(user);
        usersToDistribute[index] = undefined;
      }
    });

    groups.push(group);
  });

  // For the case of users without a specified language, add them to the largest available pool.
  const usersNotMatchedByLangaugePrios = usersToDistribute.filter(
    (el) => el != null,
  );
  if (usersNotMatchedByLangaugePrios.length > 0) {
    let groupWithMostCommonSpokeLanguage = groups[0];
    groups.forEach((group) => {
      if (group.users.length > groupWithMostCommonSpokeLanguage.users.length)
        groupWithMostCommonSpokeLanguage = group;
    });

    usersNotMatchedByLangaugePrios.forEach((user, index) => {
      groupWithMostCommonSpokeLanguage.users.push(user);
      usersNotMatchedByLangaugePrios[index] = undefined;
    });
  }

  // Sanity check original amount of users with distributed users.
  let distributedLength = 0;
  groups.forEach((group) => (distributedLength += group.users.length));
  if (distributedLength !== users.length) {
    throw new Error("Mismatch in distributed participants.");
  }

  return groups;
}
