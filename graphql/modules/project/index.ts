import { objectType } from "@nexus/schema";

export const Thumbnail = objectType({
  name: "Thumbnail",
  definition(t) {
    t.model.id();
    t.model.base64();
  },
});

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.tagline();
    t.model.thumbnail();
    t.model.description();
    t.model.technologiesUsed();
    t.model.obstacles();
    t.model.accomplishments();
    t.model.learnings();
    t.model.nextSteps();
    t.model.videoUrl();
    t.model.urls();
    t.model.images();
    t.model.team();
    t.model.challenge();
    t.model.isPublished();
    t.model.relevanceToHackathon();
    t.model.relevanceToChallenge();
    t.model.longTermImpact();
    t.model.progressDuringHackathon();
    t.model.valueAdded();
  },
});
