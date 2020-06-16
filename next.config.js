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
        {
          source: "/challengeselection",
          destination: "/team/challenge",
          permanent: true,
        },
      ];

      if (process.env.HAS_FEEDBACK) {
        redirects.push({
          source: "/feedback",
          destination: process.env.FEEDBACK_URL,
          permanent: true,
        });
      }

      if (process.env.SLACK_SIGNUP_URL) {
        redirects.push({
          source: "/slack",
          destination: process.env.SLACK_SIGNUP_URL,
          permanent: true,
        });
      }

      return redirects;
    },
  },
};
