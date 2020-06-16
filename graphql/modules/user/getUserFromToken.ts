import { getHash } from "./tokenUtils";
import prisma from "../../../prisma/prisma";

const getUserFromToken = async (token: string) => {
  try {
    const hashedToken = getHash(token);
    return await prisma.userResumeToken
      .findOne({
        where: {
          hashedToken,
        },
      })
      .user();
  } catch {
    return null;
  }
};

export default getUserFromToken;
