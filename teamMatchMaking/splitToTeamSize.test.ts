import splitToTeamSize from "./splitToTeamSize";
import { mockUser, mockDetailedUser } from "./__mock__/user";

test("distributes 1 user to 1 team", () => {
  const result = splitToTeamSize([mockUser()], 1, 1);
  expect(result.length).toBe(1);
});

test("distributes 2 users to 2 teams of 1", () => {
  const result = splitToTeamSize([mockUser(), mockUser()], 1, 1);
  expect(result.length).toBe(2);
});

test("throws error if team size too small", () => {
  expect.assertions(1);

  try {
    splitToTeamSize([mockUser()], 0, 1);
  } catch (e) {
    expect(e).toBeInstanceOf(TypeError);
  }
});

test("Adds first found primary topic to team", () => {
  const mockUsers = [
    mockDetailedUser({ hackerTopics: [{ id: "a" }, { id: "a" }] }),
    mockDetailedUser({ hackerTopics: [{ id: "b" }, { id: "b" }] }),
    mockDetailedUser({ hackerTopics: [{ id: "c" }, { id: "c" }, { id: "c" }] }),
  ];

  const result = splitToTeamSize(mockUsers, 3, 1);

  expect(result[0].topic).toBe("c");
});
