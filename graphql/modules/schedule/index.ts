import { objectType, extendType } from "@nexus/schema";

export const User = objectType({
  name: "Schedule",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.from();
    t.model.to();
    t.model.type();
    t.model.data();
    t.model.color();
  },
});
