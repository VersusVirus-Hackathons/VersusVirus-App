import { extendType } from "@nexus/schema";
import upperFirst from "lodash/upperFirst";

import lowerFirst from "lodash/lowerFirst";

export default (resourceName: string) => {
  const typeName = upperFirst(resourceName);

  const queryName = lowerFirst(resourceName);
  const queryAllName = queryName + "s";
  const queryCountName = queryName + "sCount";

  const mutations = [
    `createOne${typeName}`,
    `updateOne${typeName}`,
    `updateMany${typeName}`,
    `upsertOne${typeName}`,
    `deleteOne${typeName}`,
    `deleteMany${typeName}`,
  ];
  if (process.env.NODE_ENV === "development") {
    const queries = [queryName, queryName, queryCountName];
    console.info("");
    console.info(
      `☝ The following resolvers were defined for the resource '${resourceName}' to make it compatible for react-admin`,
    );

    console.info("Queries:     " + queries.join(" "));
    console.info("Mutations:   " + mutations.join(" "));

    console.info(
      "☝ please make sure to restirct unauthorized access to these queries using graphq-shield",
    );
    console.info("");
  }
  return {
    Query: extendType({
      type: "Query",
      definition(t) {
        t.crud[queryName]();
        t.crud[queryAllName]({
          filtering: true,
          pagination: true,
          ordering: true,
        });
        // workaround for https://github.com/prisma/prisma-client-js/issues/252
        t.int(queryCountName, {
          resolve(root, args, { prisma }) {
            return prisma[queryName].count();
          },
        });
      },
    }),

    Mutation: extendType({
      type: "Mutation",
      definition(t) {
        mutations.forEach((mutation) => t.crud[mutation](null));
      },
    }),
  };
};
