module.exports = {
  publicRuntimeConfig: {
    SLACK_SIGNUP_URL: process.env.SLACK_SIGNUP_URL,
    SLACK_DOMAIN: process.env.SLACK_DOMAIN,
    SLACK_TOKEN: process.env.SLACK_TOKEN,
    HAS_FEEDBACK: process.env.HAS_FEEDBACK,
    FEEDBACK_URL: process.env.FEEDBACK_URL,
    HAS_SIGNUP: process.env.HAS_SIGNUP,
  },
  experimental: {
    async redirects() {
      // 307 temporary redirect
      const redirects = [
        {
          source: "/__health",
          destination: "/api/__health",
          permanent: true,
        },
      ];

      return redirects;
    },
  },
};
