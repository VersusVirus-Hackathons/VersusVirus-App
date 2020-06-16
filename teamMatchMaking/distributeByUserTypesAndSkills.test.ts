import distribute from "./distributeByUserTypesAndSkills";
import { mockDetailedUser } from "./__mock__/user";
import { DetailedUser } from ".";

function mock(obj: object = {}): DetailedUser {
  return Object.assign(
    mockDetailedUser(),
    {
      id: uuidv4(), // You still need to re-generate it
      firstname: "John",
      lastname: "Doe",
      email: "john@doe.com",
      hackerTypes: [{ id: "allrounder" }, { id: "doer" }],
      hackerTopics: [{ id: "protection" }],
      hackerSkills: [{ id: "programming" }],
    },
    obj,
  );
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getMockUsers(nUsers: Number) {
  let mockUsers = [];
  for (let i = 0; i < nUsers; i++) {
    let aUser = mock();
    aUser.id = uuidv4();
    mockUsers.push(aUser);
  }
  return mockUsers;
}

test("names teams according to team index", () => {
  const result = distribute([mock()], 1, 3);
  expect(result[0].id).toContain(3);
});

test("team size according to requested size", () => {
  const teamIndex = 5;
  const mockUsers = [mock(), mock()];
  const result = distribute(mockUsers, 2, teamIndex);
  //result.forEach(t => console.log(`${t.id} :: size ${t.members.length}`));
  expect(result[0].members.length).toBe(mockUsers.length);
});

test("found required skill set", () => {
  const mockUsers = [mock(), mock()];
  mockUsers[0].hackerTypes = [{ id: "doer" }];
  mockUsers[0].hackerTopics = [{ id: "supportrequestforhelp" }];
  mockUsers[0].hackerSkills = [{ id: "projectmanagement" }];
  const result = distribute(mockUsers, 2, 1);
  expect(result[0].members.length).toBe(mockUsers.length);
});

test("testing simple team building case", () => {
  const mockUsers = [mock(), mock(), mock(), mock()];
  let numberOfUsers = mockUsers.length;
  const userSkills = [
    "projectmanagement",
    "presentingandpitching",
    "programming",
    "sportsmovement",
  ];
  mockUsers.forEach((u, i) => {
    u.id = uuidv4();
    u.hackerTopics.push({ id: "supportrequestforhelp" });
    u.hackerSkills = [];
    u.hackerSkills.push({ id: userSkills[i] });
  });
  const result = distribute(mockUsers, 1, 1);
  expect(result[0].members.length).toBe(numberOfUsers);
});

test("testing team building without all required skills", () => {
  const mockUsers = [mock(), mock(), mock(), mock()];
  let numberOfUsers = mockUsers.length;
  const userSkills = [
    "projectmanagement",
    "presentingandpitching",
    "programming",
    "sportsmovement",
  ];
  mockUsers.forEach((u, i) => {
    u.id = uuidv4();
    u.hackerTopics.push({ id: "supportrequestforhelp" });
    u.hackerSkills.push({ id: userSkills[i] });
  });
  // Changing the skill of one of the hackers
  mockUsers[1].hackerSkills = [{ id: "doer" }];
  const result = distribute(mockUsers, 1, 1);
  //result[0].members.forEach( u => console.log(u.id) );
  expect(result[0].members.length).toBeLessThan(numberOfUsers);
  //expect(console).toHaveLoggedWith("[team-6] No user found for skill presentingandpitching");
});

test("testing team building without all required skills (but present in other person)", () => {
  const mockUsers = [mock(), mock(), mock(), mock()];
  let numberOfUsers = mockUsers.length;
  const userSkills = [
    "projectmanagement",
    "presentingandpitching",
    "programming",
    "sportsmovement",
  ];
  mockUsers.forEach((u, i) => {
    u.id = uuidv4();
    u.hackerTopics.push({ id: "supportrequestforhelp" });
    u.hackerSkills.push({ id: userSkills[i] });
  });
  // Changing the skill of one of the hackers
  mockUsers[2].hackerSkills = [{ id: "doer" }];
  const result = distribute(mockUsers, 1, 1);
  //result[0].members.forEach( u => console.log(u.id) );
  expect(result[0].members.length).toBe(numberOfUsers - 1);
});

test("testing team building with off-topic users", () => {
  const mockUsers = [mock(), mock(), mock(), mock()];
  let numberOfUsers = mockUsers.length;
  const userSkills = [
    "projectmanagement",
    "presentingandpitching",
    "programming",
    "sportsmovement",
  ];
  mockUsers.forEach((u, i) => {
    u.id = uuidv4();
    u.hackerTopics.push({ id: "other" });
    u.hackerSkills.push({ id: userSkills[i] });
  });
  let teamSize = 1;
  const result = distribute(mockUsers, teamSize, 1);
  //result[0].members.forEach( u => console.log(u.id) );
  expect(result[0].members.length).toBe(teamSize);
});

test("testing team min size of 8", () => {
  const mockUsers = getMockUsers(12);
  //console.log(`Number of users in pool: ${mockUsers.length}`);
  const result = distribute(mockUsers, 8, 1);
  expect(result[0].members.length).toBe(8);
});
