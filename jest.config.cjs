module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', 
  },
  testEnvironment: 'node', 
  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{js}", // Include all source files
    "!src/**/*.test.{js}", // Exclude test files
  ],

  // Output format
  coverageReporters: [
    "text", // Text report shown in the terminal
    "lcov", // LCOV format (used by Coveralls)
    "json-summary", // JSON summary (optional)
  ],

  coverageDirectory: "coverage",

  // Threshold testing
  /*
  coverageThreshold: {
    global: {
      branches: 80,   // Minimum branch coverage
      functions: 80,  // Minimum function coverage
      lines: 80,      // Minimum line coverage
      statements: 80, // Minimum statement coverage
    },
  },
  */
};
