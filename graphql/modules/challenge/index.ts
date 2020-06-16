import { objectType, extendType } from "@nexus/schema";

export const Challenge = objectType({
  name: "Challenge",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.context();
    t.model.challenge();
    t.model.solution();
    t.model.resources();
    t.model.teamsThatCanSelectThisChallenge();
    t.model.teamsThatSelectedThisChallenge();
    t.model.projects();
    t.model.contactName();
    t.model.contactEmail();
    t.model.primaryTopic();
    t.model.organization();
    t.model.commentsByTeam();
    t.model.usersThatPreferThisChallenge();
  },
});
