import { User } from "@prisma/client";
import { DetailedUser, TeamWithMembers } from ".";
import splitToTeamSize from "./splitToTeamSize";
import { teamId } from "./createTeams";

const ENABLE_LOGGING = false;

function log(...args) {
  if (ENABLE_LOGGING) console.log(...args);
}

/* Hard-coded minimal team requirements
   Note: not including (yet) a count of each per team.
  */
const skillMap = [
  {
    id: "supportrequestforhelp",
    skills: [
      "projectmanagement",
      "presentingandpitching",
      "programming",
      "sportsmovement",
    ],
  },
  {
    id: "artandculture",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "crimereduction",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "other",
    skills: ["projectmanagement", "presentingandpitching"],
  },
  {
    id: "protection",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "prevention",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "dataandfacts",
    skills: [
      "projectmanagement",
      "presentingandpitching",
      "programming",
      "datawrangling",
    ],
  },
  {
    id: "economical",
    skills: [
      "projectmanagement",
      "presentingandpitching",
      "programming",
      "businessandsales",
      "datawrangling",
      "marketingandpr",
      "strategyandbusinessdevelopment",
    ],
  },
  {
    id: "isolation",
    skills: [
      "projectmanagement",
      "presentingandpitching",
      "programming",
      "sportsmovement",
    ],
  },
  {
    id: "health",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "familykidsandeducation",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "education",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "homeofficeandteamwork",
    skills: ["projectmanagement", "presentingandpitching", "programming"],
  },
  {
    id: "afterthecrisis",
    skills: [
      "projectmanagement",
      "presentingandpitching",
      "programming",
      "sportsmovement",
    ],
  },
];

/* Currently only having the same requirements for all teams, i.e. at least one of each */
const wantedHackerTypes = [
  "doer",
  "conceptualist",
  "fieldresearcher",
  "creativehead",
  "flexible",
  "challenger",
  "nerd",
];

/* Topics */

const theTopics = [
  "supportrequestforhelp",
  "artandculture",
  "crimereduction",
  "other",
  "protection",
  "prevention",
  "dataandfacts",
  "economical",
  "isolation",
  "health",
  "familykidsandeducation",
  "education",
  "homeofficeandteamwork",
  "afterthecrisis",
];

/* Find one user in pool with the desired qualities */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomIndexArray(len: number) {
  let result = [...Array(len)].map((x, y) => y);
  shuffleArray(result);
  return result;
}

// Todo: extend for topic as well
function getOneUser(
  userPool: User[],
  reqHackerType: string,
  reqHackerSkill: string,
) {
  if (userPool.length == 0) return null;
  // Iterating randomly over elements
  let idxArray = getRandomIndexArray(userPool.length);
  for (let i = 0; i < userPool.length; i++) {
    let user = userPool[idxArray[i]];
    if (reqHackerType == "any" && reqHackerSkill == "any") return user;
    let isTypeMatch = false;
    let isSkillMatch = false;
    for (let hackerType of (user as DetailedUser).hackerTypes) {
      if (reqHackerType == (hackerType as any).id) {
        isTypeMatch = true;
        break;
      }
    }
    if (isTypeMatch && reqHackerSkill == "any") return user;

    for (let hackerSkill of (user as DetailedUser).hackerSkills) {
      if (reqHackerSkill == (hackerSkill as any).id) {
        isSkillMatch = true;
        break;
      }
    }

    if (isSkillMatch && reqHackerType == "any") return user;
    else if (isTypeMatch && isSkillMatch) return user;
  }
  return null;
}

function hasTeamQuality(
  user: User,
  hackerQuality: string,
  teamQuality: string,
) {
  let belongsToTeam = false;
  const userHackQuality = user[hackerQuality];
  for (let hackerQual of userHackQuality) {
    if (teamQuality == hackerQual.id) {
      belongsToTeam = true;
      break;
    }
    return belongsToTeam;
  }
}

// Todo: use in more places (needs some refactoring of buildTeam)
function getUserWithTopic(
  teamTopic: string,
  userPool: User[],
  reqHackerType = "any",
  reqHackerSkill = "any",
) {
  let aUser;
  let counter = 0;
  let poolSize = userPool.length;
  while (counter <= poolSize * 1) {
    // (Inefficiently) protecting against infinite loops, though still not guaranteeing that every user is seen once
    aUser = getOneUser(userPool, reqHackerType, reqHackerSkill);
    counter += 1;
    if (aUser != null) return aUser;
  }
  return null;
}

function getQualityCountsInTeam(teamMembers: User[], quality: string) {
  let teamQualities = {};
  teamMembers.forEach((u) => {
    u[quality].forEach((q) => {
      if (Object.is(teamQualities[q.id], undefined)) teamQualities[q.id] = 1;
      else teamQualities[q.id] += 1;
    });
  });
  // log(Object.entries(teamQualities));
  return teamQualities;
}

function buildTeam(
  userPool: User[],
  teamTopic: string,
  teamIndex: number,
  minTeamSize = 0,
) {
  let teamMembers = [];
  let topicSkills = skillMap.filter((s) => s.id == teamTopic);

  for (let skill of topicSkills[0].skills) {
    // Make me safe! (I'm assuming there's at least an element left.)
    // Searching for a user in the pool with the given skill
    // Then checking whether he/she chose the team's topic
    let aUser;
    let counter = 0;
    let poolSize = userPool.length;
    while (counter <= poolSize * 1) {
      // (Inefficiently) protecting against infinite loops, though still not guaranteeing that every user is seen once
      aUser = getOneUser(userPool, "any", skill);
      counter += 1;
      if (aUser == null) {
        // We didn't find a user with the required skill
        // Let's check if the skill is alrady in the team... or warn
        const someMemberHasSkill = teamMembers.some((member) =>
          member.hackerSkills.some((skill) => skill.id === skill),
        );
        // Ony warn if the skill is not in any other team member
        // if (ENABLE_LOGGING && someMemberHasSkill == false) {
        //   log("[" + teamIndex + "] No user found for skill " + skill);
        // }
        break;
      }

      let belongsToTeam = false;
      for (let hackerTopic of aUser.hackerTopics) {
        if (teamTopic == hackerTopic.id) {
          belongsToTeam = true;
          break;
        }
      }
      // We found a good team member
      if (belongsToTeam) {
        teamMembers.push(aUser);
        // Removing the user from the pool
        userPool = userPool.filter((u) => u.id != aUser.id);
        break;
      } else {
        // log(`[${teamIndex}] User has no skills required by team: ` + aUser.id);
      }
    }
  }

  // Now let's get the hackerTypes in the team
  let teamHackerTypes = getQualityCountsInTeam(teamMembers, "hackerTypes");

  // Now we can add members according to the types we miss...

  for (let hType in wantedHackerTypes) {
    if (hType in teamHackerTypes) continue;
    // We look for a person with the proper hacker type and topic
    let aUser;
    let counter = 0;
    let poolSize = userPool.length;
    while (counter <= poolSize * 1) {
      // (Inefficiently) protecting against infinite loops, though still not guaranteeing that every user is seen once
      // Todo: cleanup the functions
      aUser = getOneUser(userPool, hType, "any");
      counter += 1;
      if (aUser == null) break;
      if (hasTeamQuality(aUser, "hackerTopic", hType)) {
        teamMembers.push(aUser);
        // Removing the user from the pool
        userPool = userPool.filter((u) => u.id != aUser.id);
        break;
      }
    }
  }

  let teamMemberCount = teamMembers.length;
  // log(`[${teamIndex}] Got ${teamMemberCount}, augmenting it to reach ${minTeamSize}`);

  for (let i = teamMemberCount; i < minTeamSize; i++) {
    //log(`iteration ${i}, user pool size ${userPool.length}`);
    let aUser = getUserWithTopic(teamTopic, userPool);
    if (aUser == null) break;
    //log(`[${teamIndex}] Adding (random) user ${aUser.id}`);
    teamMembers.push(aUser);
    userPool = userPool.filter((u) => u.id != aUser.id);
  }

  const team: TeamWithMembers = {
    id: teamId(teamIndex),
    members: teamMembers,
    topic: teamTopic,
  };

  return { userPool, team };
}

function showTeamInfo(team: { id: string; members: User[] }) {
  log(`Showing info for team ${team.id}`);
  log(`${team.id} size: ${team.members.length}`);

  for (let quality of ["hackerTypes", "hackerSkills"]) {
    let teamQualities = getQualityCountsInTeam(team.members, quality);
    log(`${team.id} ${quality}: ` + Object.keys(teamQualities));
    for (const [hackerQuality, count] of Object.entries(teamQualities)) {
      log(`${team.id} :: I count ${count} of type ${hackerQuality}`);
    }
  }

  team.members.forEach((u) => {
    let userSkills = [];
    (u as DetailedUser).hackerSkills.forEach((s) =>
      userSkills.push((s as any).id),
    );
    let userTypes = [];
    (u as DetailedUser).hackerTypes.forEach((t) =>
      userTypes.push((t as any).id),
    );
    log(`User ${u.firstname} has skills ${userSkills} and types ${userTypes}`);
  });
}

/* Assumes that it is given a pool from which it can look for skills and types */
export default function distributeByUserTypesAndSkills(
  allUsers: User[],
  teamSize: number,
  teamIndex: number,
): TeamWithMembers[] {
  if (teamSize < 1) throw new TypeError("Team size too small.");

  let teams: TeamWithMembers[] = [];
  let usersToDistribute = [...allUsers];

  let aCounter = 0;
  while (true) {
    for (let topicName of theTopics) {
      for (let topicName of theTopics) {
        log(
          `***************** Building team for topic ${topicName} ::: ${teams.length} teams made so far ; ${usersToDistribute.length} users in pool *****************`,
        );

        let teamBuilderOutput = buildTeam(
          usersToDistribute,
          topicName,
          teamIndex,
          teamSize,
        );

        let theTeam = teamBuilderOutput.team;
        usersToDistribute = teamBuilderOutput.userPool;

        if (theTeam.members.length) {
          teamIndex += 1;
          teams.push(theTeam);
        }
      }
    }

    // Protection: no more than 30 teams per topic
    aCounter += 1;
    if (aCounter > 30) break;
  }

  if (ENABLE_LOGGING) {
    teams.forEach((t) => showTeamInfo(t));
  }

  if (usersToDistribute.length > 0) {
    console.warn(
      `Warning: distributeByUserTypesAndSkills still has ${usersToDistribute.length} in the pool. Splitting rest equally.`,
    );
    const split = splitToTeamSize(usersToDistribute, teamSize, teamIndex);
    teams = [...teams, ...split];
  }

  return teams;
}
