module.exports = {
  rules: {
    "no-console": 1,
    "prefer-template": 1,
    "no-unused-vars": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-unescaped-entities": 0,
    "react/no-children-prop": 0,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
