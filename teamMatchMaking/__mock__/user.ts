import { User } from "@prisma/client";
import { DetailedUser } from "..";

export function mockUser(obj: object = {}): User {
  return Object.assign(
    {
      id: "",
      firstname: "",
      lastname: "",
      profilePhotoId: null,
      email: "",
      emailConfirmed: true,
      phoneNumber: "",
      languages: [""],
      city: "",
      possibleTeamMemberEmails: null,
      participateInTeamBuildingSession: null,
      linkedin: null,
      instagram: null,
      facebook: null,
      twitter: null,
      teamId: null,
      devpostUrl: null,
      isAnonymized: false,
      preferredChallengeId: null,
    },
    obj,
  );
}

export function mockDetailedUser(obj: object = {}): DetailedUser {
  return Object.assign(
    {
      hackerTypes: [],
      hackerTopics: [],
      hackerSkills: [],
      roles: [],
    },
    mockUser(obj),
  );
}
