import extractPrefferedChallenges, {
  uniquePreferredChallengeIds,
} from "./extractPrefferedChallenges";
import { mockUser } from "./__mock__/user";
import { teamId } from "./createTeams";

const mock = (preferredChallengeId: string) =>
  mockUser({ preferredChallengeId });

test("get all unique challenge IDs from a list", () => {
  const mockUsers = [
    mock("1"),
    mock("2"),
    mock("2"),
    mock("3"),
    mock("3"),
    mock("3"),
  ];
  const result = uniquePreferredChallengeIds(mockUsers);
  expect(result).toHaveLength(3);
  expect(result).toContain("1");
  expect(result).toContain("2");
  expect(result).toContain("3");
});

test("pass through users that do not have a preffered challenge", () => {
  const mockUsers = [mockUser()];
  const result = extractPrefferedChallenges(mockUsers);

  expect(result.pool).toHaveLength(1);
  expect(result.teams).toHaveLength(0);
});

test("extract a single user with a preferred challenge", () => {
  const mockUsers = [mock("1")];
  const result = extractPrefferedChallenges(mockUsers);

  expect(result.pool).toHaveLength(0);
  expect(result.teams).toHaveLength(1);
  expect(result.teams[0].members[0].preferredChallengeId).toBe("1");
});

test("put two users with the same challenge into the same team", () => {
  const mockUsers = [mock("1"), mock("1")];
  const result = extractPrefferedChallenges(mockUsers);
  expect(result.teams).toHaveLength(1);
  expect(result.teams[0].members).toHaveLength(2);
});

test("split six users into three teams", () => {
  const mockUsers = [
    mock("1"),
    mock("2"),
    mock("2"),
    mock("3"),
    mock("3"),
    mock("3"),
  ];
  const result = extractPrefferedChallenges(mockUsers);
  expect(result.teams).toHaveLength(3);
  expect(result.teams[0].members).toHaveLength(1);
  expect(result.teams[1].members).toHaveLength(2);
  expect(result.teams[2].members).toHaveLength(3);
  expect(result.teams[0].members[0].preferredChallengeId).toBe("1");
  expect(result.teams[1].members[0].preferredChallengeId).toBe("2");
  expect(result.teams[1].members[1].preferredChallengeId).toBe("2");
  expect(result.teams[2].members[0].preferredChallengeId).toBe("3");
  expect(result.teams[2].members[1].preferredChallengeId).toBe("3");
  expect(result.teams[2].members[2].preferredChallengeId).toBe("3");
});

test("teams to named staring from a specific index", () => {
  const mockUsers = [mock("1"), mock("2")];
  const result = extractPrefferedChallenges(mockUsers, 5);
  expect(result.teams[0].id).toBe(teamId(5));
  expect(result.teams[1].id).toBe(teamId(6));
});
