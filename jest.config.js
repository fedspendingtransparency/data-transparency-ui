module.exports = {
    rootDir: ".",
    testRegex: "tests/.*-(test)\\.jsx?$",
    verbose: true,
    bail: false,
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },
    collectCoverageFrom: [
        "helpers/*.{js,jsx}",
        "components/**/*.{js,jsx}",
        "!node_modules/**"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: ["<rootDir>/tests/setup.js"]
};
