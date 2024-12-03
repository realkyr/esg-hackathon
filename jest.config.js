const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Base directory for Next.js
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Jest setup file
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Support for TypeScript path aliases
  },
};

module.exports = createJestConfig(customJestConfig);