import createTeams, {
  distributedByLanguage,
  MINMAL_POOL_FOR_SKILLS_DISTRIBUTION,
} from "./createTeams";
import { User } from "@prisma/client";
import { mockUser } from "./__mock__/user";

const A = "a@example.com";
const B = "b@example.com";

/**
 * Creates a random data set that can be pasted into a test.
 */
function generateDataSet() {
  const allHackerSkills = [
    "allrounder",
    "businessandsales",
    "craftsmen",
    "creativeandarts",
    "datawrangling",
    "designandmultimedia",
    "environmentalandsustainability",
    "marketingandpr",
    "philantropticandhumanitarian",
    "presentingandpitching",
    "programming",
    "projectmanagement",
    "serviceandgastronomy",
    "socialandeducational",
    "strategyandbusinessdevelopment",
    "medicalandsport",
    "sportsmovement",
  ];

  const allHackerTypes = [
    "conceptualist",
    "creativehead",
    "doer",
    "flexible",
    "challenger",
    "nerd",
    "fieldresearcher",
  ];

  const allHackerTopics = [
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

  let n = MINMAL_POOL_FOR_SKILLS_DISTRIBUTION;
  let str = "[";
  while (n--) {
    str += "mockDetailedUser({";
    str += `hackerTypes: [{id:"${
      allHackerTypes[Math.floor(Math.random() * allHackerTypes.length)]
    }"},{id:"${
      allHackerTypes[Math.floor(Math.random() * allHackerTypes.length)]
    }"}],`;
    str += `hackerSkills: [{id:"${
      allHackerSkills[Math.floor(Math.random() * allHackerSkills.length)]
    }"},{id:"${
      allHackerSkills[Math.floor(Math.random() * allHackerSkills.length)]
    }"}],`;
    str += `hackerTopics: [{id:"${
      allHackerTopics[Math.floor(Math.random() * allHackerTopics.length)]
    }"},{id:"${
      allHackerTopics[Math.floor(Math.random() * allHackerTopics.length)]
    }"}],`;
    str += "}),";
  }
  str += "]";
  return str;
}

function mockEmail() {
  var strValues = "abcdefg12345";
  var strEmail = "";
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = "";
  strEmail = strEmail + "@";
  for (var j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + ".com";
  return strEmail;
}

test("users distributed by langauge and then devided, should equal total users", () => {
  const mockParticipants: User[] = [
    mockUser({ languages: ["en"] }),
    mockUser({ languages: ["de"] }),
    mockUser({ languages: ["fr"] }),
    mockUser({ languages: ["it"] }),
  ];

  const teams = distributedByLanguage(mockParticipants);

  expect(teams).toHaveLength(4);
});

test(`users 
extracted by proposed teams, 
then extracted by preferred challenges, 
then distributed by langauge, 
then devided equaly by team size, 
should equal total users`, () => {
  const mockParticipants: User[] = [
    mockUser({
      id: "first",
      languages: ["en"],
      email: A,
      possibleTeamMemberEmails: B,
    }),
    mockUser({ id: "second", languages: ["en"], email: B }),
    mockUser({ id: "third", languages: ["en"], preferredChallengeId: "1" }),
    mockUser({ id: "forth", languages: ["en"], preferredChallengeId: "1" }),
    mockUser({ id: "fifth", languages: ["en"] }),
    mockUser({ id: "sixth", languages: ["de"] }),
  ];

  const teams = createTeams(mockParticipants);
  expect(teams).toHaveLength(4);

  const teamWithProposedTeamMembers = teams[0];
  expect(teamWithProposedTeamMembers.id).toContain(1);
  expect(teamWithProposedTeamMembers.members[0].id).toEqual("first");
  expect(teamWithProposedTeamMembers.members[0].email).toEqual(A);
  expect(teamWithProposedTeamMembers.members[1].id).toEqual("second");
  expect(teamWithProposedTeamMembers.members[1].email).toEqual(B);

  const teamWithPreferredChallenge = teams[1];
  expect(teamWithPreferredChallenge.id).toContain(2);
  const teamWithPreferredChallengeIds = [
    teamWithPreferredChallenge.members[0].id,
    teamWithPreferredChallenge.members[1].id,
  ];
  expect(teamWithPreferredChallengeIds).toContain("third");
  expect(teamWithPreferredChallengeIds).toContain("forth");

  const englishTeam = teams[2];
  expect(englishTeam.id).toContain(3);
  expect(englishTeam.members[0].id).toBe("fifth");
  expect(englishTeam.members[0].languages).toContain("en");

  const germanTeam = teams[3];
  expect(germanTeam.id).toContain(4);
  expect(germanTeam.members[0].id).toBe("sixth");
  expect(germanTeam.members[0].languages).toContain("de");
});
