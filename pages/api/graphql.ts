import server from "../../graphql/server";

import Cors from "cors";

// see https://nextjs.org/docs/api-routes/api-middlewares
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  const graphqlHandler = server.createHandler({
    path: "/api/graphql",
  });

  // Run the middleware
  await runMiddleware(req, res, cors);
  return graphqlHandler(req, res);
}

export default handler;
