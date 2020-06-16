import prisma from "../../prisma/prisma";

export default async (req, res) => {
  try {
    // this throws if there is some db error
    //await prisma.user.count();

    res.end("ok");
  } catch (e) {
    throw e;
  }
};
