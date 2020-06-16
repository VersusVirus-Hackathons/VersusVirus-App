const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient({
  errorFormat: "colorless",
});

module.exports = prisma;
