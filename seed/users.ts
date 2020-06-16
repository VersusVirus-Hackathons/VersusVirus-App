import omit from "lodash/omit";
import prisma from "../prisma/prisma";

const Users = [
  {
    email: "helpdesk@versusvirus.ch",
    firstname: "Hans",
    lastname: "Muster",
    emailConfirmed: true,
    phoneNumber: "0123456789",
    city: "Geneva",
    roles: { connect: { id: "admin" } },
  },
];

export default async () => {
  for (let user of Users) {
    await prisma.user.upsert({
      where: { email: user.email },
      create: user,
      update: {},
    });
  }
};
