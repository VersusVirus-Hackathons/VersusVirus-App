import prisma from "../prisma/prisma";

const HackerTopic = [
  {
    description:
      "How can we support with shopping, volunteering, basic medical needs, telephone or mental support for lonely people?",
    id: "supportrequestforhelp",
    title: "Support & Solidarity",
  },
  {
    description:
      "How can art and entertainment interact in new and digital ways with the public?",
    id: "artandculture",
    title: "Art & Culture",
  },
  {
    description:
      "How can we reduce or avoid an increase of crisis related crimes, like e.g. domestic violence?",
    id: "crimereduction",
    title: "Crime Reduction",
  },
  {
    description:
      "How is it possible we haven't covered your challenge yet? - we love it anyhow!",
    id: "other",
    title: "Other",
  },
  {
    description:
      "How can we protect high risk groups (e.g. elderly or people with chronic diseases) during the outbreak and at further pandemic stages?",
    id: "protection",
    title: "Protection of Risk Groups",
  },
  {
    description:
      "How can we develop new strategies and concepts to flatten the curve?",
    id: "prevention",
    title: "Dissemination Prevention",
  },
  {
    description:
      "How can tools ensure trustworthy, sustainable and equitable access to information?",
    id: "dataandfacts",
    title: "Trustable Data vs Fake News",
  },
  {
    description:
      "How can we solve cash flow and liquidity issues, especially of entrepreneurs, SMEs and freelancers?",
    id: "economical",
    title: "Economic Impact",
  },
  {
    description:
      "How can we combat loneliness and redesign inspiring social life in isolation?",
    id: "isolation",
    title: "Isolation & Mental Health",
  },
  {
    description:
      "How can we better balance scarce vital resources, like materials, logistics, scheduling and planning?",
    id: "health",
    title: "Hospital & Medical Care",
  },
  {
    description:
      "How can we cope with the changed requirements of work life balance as well as questions and fears of family and children?",
    id: "familykidsandeducation",
    title: "Family & Kids",
  },
  {
    description:
      "How can tools and hacks enable interactive remote learning and tutoring for all ages, including matura and entering of the job market?",
    id: "education",
    title: "Education",
  },
  {
    description:
      "How can we tackle the challenges of remote online and offline collaboration as well as efficiency and management of teams?",
    id: "homeofficeandteamwork",
    title: "Home Office & Teamwork",
  },
  {
    description:
      "How can we adapt and prepare for after the crisis, a slower life style and with finite resources?",
    id: "afterthecrisis",
    title: "After the Crisis",
  },
];

export default async () => {
  for (let topic of HackerTopic) {
    await prisma.hackerTopic.upsert({
      where: { id: topic.id },
      update: {},
      create: topic,
    });
  }
};
