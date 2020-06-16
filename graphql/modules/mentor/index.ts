import { objectType, extendType } from "@nexus/schema";

export const Mentor = objectType({
  name: "Mentor",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.skills();
    t.model.linkedin();
    t.model.languages();
    t.model.email();
    t.model.topics();
  },
});

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.crud.mentors();
  },
});
