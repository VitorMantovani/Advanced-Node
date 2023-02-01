/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    collectCoverageFrom: ["<rootir>/src/**/*.ts"],
    coverageDirectory: "coverage",
    coverageProvider: "babel",
    moduleNameMapper: {
        "@/tests/(.+)": "<rootDir>/tests/$1",
        "@/(.+)": "<rootDir>/src/$1",
    },
    roots: ["<rootDir>/src", "<rootDir>/tests"],
    transform: {
        "\\.ts$": "ts-jest",
    },
};
