import prisma from "../prisma/prisma";

const HackerTypes = [
  {
    description:
      "You support creative minds by breaking down their many ideas and translating them into a concept. You create a tangible, realistic concept from a vague idea.",
    id: "conceptualist",
    title: "Conceptualist",
  },
  {
    description:
      "You get new creative ideas in 1-minute intervals. Challenges are the playground for new ideas.",
    id: "creativehead",
    title: "Creative Head",
  },
  {
    description:
      "You are a website developer, designer or a business strategist and maker in general – thanks to you ideas become reality. You translate what is thought into something tangible.",
    id: "doer",
    title: "Doer",
  },
  {
    description:
      "You jump in where it’s needed, because you can use your broad experience to advance the common idea in many ways.",
    id: "flexible",
    title: "Flexible",
  },
  {
    description:
      "You are critical and point out to the team when they move into utopian areas and bring the thinking of others back on track.",
    id: "challenger",
    title: "Challenger",
  },
  {
    description:
      "You inspire and support the team with your valuable expertise.",
    id: "nerd",
    title: "Nerd",
  },
  {
    description:
      "You prefer to be in direct exchange with the target group in order to make the result as user- and needs-oriented as possible.",
    id: "fieldresearcher",
    title: "Field researcher",
  },
];

export default async () => {
  for (let hackerType of HackerTypes) {
    await prisma.hackerType.upsert({
      where: { id: hackerType.id },
      update: {},
      create: hackerType,
    });
  }
};
