const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90,
        },
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
