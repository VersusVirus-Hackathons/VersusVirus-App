import splitBySpokenLanguages from "./splitBySpokenLanguages";
import { mockUser } from "./__mock__/user";
import { User } from "@prisma/client";

function mock(languages: string[] = []): User {
  return Object.assign(mockUser(), { languages });
}

test("an error occurs if no language priorities are set", () => {
  expect.assertions(1);

  const users = [mockUser()];

  try {
    splitBySpokenLanguages(users, [""]);
  } catch (e) {
    expect(e).toBeInstanceOf(TypeError);
  }
});

test("two users speaking two languages are split into two groups", () => {
  const users = [mock(["langPrio1"]), mock(["langPrio2"])];

  const result = splitBySpokenLanguages(users, ["langPrio1", "langPrio2"]);
  expect(result).toHaveLength(2);

  expect(result[0].users).toHaveLength(1);
  expect(result[0].language).toBe("langPrio1");
  expect(result[0].users[0].languages).toContain("langPrio1");

  expect(result[1].users).toHaveLength(1);
  expect(result[1].language).toBe("langPrio2");
  expect(result[1].users[0].languages).toContain("langPrio2");
});

test("four users speaking two languages are split into two groups", () => {
  const users = [
    mock(["langPrio1"]),
    mock(["langPrio2"]),
    mock(["langPrio1"]),
    mock(["langPrio2"]),
  ];

  const result = splitBySpokenLanguages(users, ["langPrio1", "langPrio2"]);

  expect(result).toHaveLength(2);

  expect(result[0].users).toHaveLength(2);
  expect(result[0].language).toBe("langPrio1");
  expect(result[0].users[0].languages).toContain("langPrio1");

  expect(result[1].users).toHaveLength(2);
  expect(result[1].language).toBe("langPrio2");
  expect(result[1].users[0].languages).toContain("langPrio2");
});

test("users without a defined lanugage are addd to the most commonly spoke language", () => {
  const users = [
    mock(["langPrio1"]),
    mock(["langPrio2"]),
    mock(["langPrio2"]),
    mockUser(),
  ];

  const result = splitBySpokenLanguages(users, ["langPrio1", "langPrio2"]);
  expect(result[1].users).toHaveLength(3);
});
