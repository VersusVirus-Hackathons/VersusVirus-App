import { User } from "@prisma/client";
import extractProposedTeams, {
  createEmailsToIndex,
  getPrimaryTopic,
} from "./extractProposedTeams";
import { TeamWithMembers } from ".";
import { mockUser, mockDetailedUser } from "./__mock__/user";

const A = "a@example.com";
const B = "b@example.com";
const C = "c@example.com";
const D = "d@example.com";

function mock(email: string, possibleTeamMemberEmails: string[]): User {
  return Object.assign(mockUser(), {
    email,
    possibleTeamMemberEmails: possibleTeamMemberEmails.join(","),
  });
}

test("creates a lookup table for multiple email addresses", () => {
  const mockUsers = [mock(A, [B]), mock(C, [D])];

  const result = createEmailsToIndex(mockUsers);

  expect(result[A]).toBe(0);
  expect(result[C]).toBe(1);
});

test("a team should only be created if a proposed team member exists", () => {
  const mockUsers = [mock(A, [B])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(0);
  expect(result.pool).toHaveLength(1);
});

test("a single proposed team member should be added to a team", () => {
  const mockUsers = [mock(A, [B]), mock(B, [])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(1);
  expect(result.pool).toHaveLength(0);

  const team = result.teams[0];
  expect(team.members).toHaveLength(2);
  expect(team.members[0].email).toEqual(A);
  expect(team.members[1].email).toEqual(B);
  expect(team.id).toContain(1);
});

test("team members proposing each other should be in a single team", () => {
  const mockUsers = [mock(A, [B]), mock(B, [A])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(1);
  expect(result.pool).toHaveLength(0);
});

test("multiple proposed team members should be added to a team", () => {
  const mockUsers = [mock(A, [B, C]), mock(B, []), mock(C, [])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(1);
  expect(result.pool).toHaveLength(0);

  const team = result.teams[0];
  expect(team.members).toHaveLength(3);
});

test("team count should start at the given number", () => {
  const mockUsers = [mock(A, [B]), mock(B, []), mock(C, [D]), mock(D, [])];

  const result = extractProposedTeams(mockUsers, 5);

  expect(result.teams).toHaveLength(2);
  expect(result.teams[0].id).toContain(5);
  expect(result.teams[1].id).toContain(6);
});

test("multiple proposed team members should be added to multiple teams", () => {
  const mockUsers = [mock(A, [B]), mock(B, []), mock(C, [D]), mock(D, [])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(2);

  const team1 = result.teams[0];
  expect(team1.id).toContain(1);
  expect(team1.members[0].email).toBe(A);
  expect(team1.members[1].email).toBe(B);

  const team2 = result.teams[1];
  expect(team2.id).toContain(2);
  expect(team2.members[0].email).toBe(C);
  expect(team2.members[1].email).toBe(D);

  expect(result.pool).toHaveLength(0);
});

test("a chain of proposed team members (A proposes B, B proposes C) should be in the same team", () => {
  const mockUsers = [mock(A, [B]), mock(B, [C]), mock(C, [])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(1);
  expect(result.pool).toHaveLength(0);
});

test("a chain of proposed team members (A proposes B, B proposes C, C proposed D) should be in the same team", () => {
  const mockUsers = [mock(A, [B]), mock(B, [C]), mock(C, [D]), mock(D, [])];

  const result = extractProposedTeams(mockUsers, 1);

  expect(result.teams).toHaveLength(1);
  expect(result.pool).toHaveLength(0);
});

test("a team gets the most common topic assigned", () => {
  const mockUsers = [
    mockDetailedUser({
      email: A,
      possibleTeamMemberEmails: B,
      hackerTopics: [
        {
          id: "other",
        },
      ],
    }),
    mockDetailedUser({
      email: B,
      hackerTopics: [
        {
          id: "other",
        },
      ],
    }),
  ];

  const result = extractProposedTeams(mockUsers, 1);

  expect((result.teams[0] as TeamWithMembers).topic).toBe("other");
});

test("selects the primary topic from a list", () => {
  const topics = [{ id: "a" }, { id: "a" }, { id: "b" }];
  const result = getPrimaryTopic(topics);

  expect(result).toBe("a");
});

test("selects the first primary topic from an equal list", () => {
  const topics = [{ id: "a" }, { id: "a" }, { id: "b" }, { id: "b" }];
  const result = getPrimaryTopic(topics);

  expect(result).toBe("a");
});

test("selects a primary topic from a long list", () => {
  const topics = [
    { id: "a" },
    { id: "b" },
    { id: "c" },
    { id: "a" },
    { id: "b" },
    { id: "c" },
    { id: "a" },
  ];
  const result = getPrimaryTopic(topics);

  expect(result).toBe("a");
});
