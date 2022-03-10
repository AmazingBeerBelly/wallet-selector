const { testEnvironment, ...nxPreset } = require("@nrwl/jest/preset");

module.exports = {
  ...nxPreset,
  preset: "jest-playwright-preset",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.e2e.json",
    },
  },
  displayName: "react-e2e",
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium"],
    },
  },
};
