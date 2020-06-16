import prisma from "../prisma/prisma";

const Skills = [
  {
    description: "",
    id: "allrounder",
    title: "Allrounder",
  },
  {
    description: "",
    id: "businessandsales",
    title: "Business & Sales",
  },
  {
    description: "",
    id: "craftsmen",
    title: "Craftsmen",
  },
  {
    description: "",
    id: "creativeandarts",
    title: "Creative & Arts",
  },
  {
    description: "",
    id: "datawrangling",
    title: "Data wrangling",
  },
  {
    description: "",
    id: "designandmultimedia",
    title: "Design & Multimedia",
  },
  {
    description: "",
    id: "environmentalandsustainability",
    title: "Environmental & Sustainability",
  },
  {
    description: "",
    id: "marketingandpr",
    title: "Marketing & PR",
  },
  {
    description: "",
    id: "philantropticandhumanitarian",
    title: "Philantropic & Humanitarian",
  },
  {
    description: "",
    id: "presentingandpitching",
    title: "Presenting & Pitching",
  },
  {
    description: "",
    id: "programming",
    title: "Programming",
  },
  {
    description: "",
    id: "projectmanagement",
    title: "Project Management",
  },
  {
    description: "",
    id: "serviceandgastronomy",
    title: "Service & Gastronomy",
  },
  {
    description: "",
    id: "socialandeducational",
    title: "Social & Educational",
  },
  {
    description: "",
    id: "strategyandbusinessdevelopment",
    title: "Strategy & Business Development",
  },
  {
    description: "",
    id: "medicalandsport",
    title: "Medical & Biology",
  },
  {
    description: "",
    id: "sportsmovement",
    title: "Sports & Movement",
  },
];

export default async () => {
  for (let skill of Skills) {
    await prisma.hackerSkill.upsert({
      where: { id: skill.id },
      update: {},
      create: skill,
    });
  }
};
