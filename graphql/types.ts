import { PrismaClient, User } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
  user: User;
  res: any;
};
