module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },

  collectCoverage: true,
  collectCoverageFrom: [
    '**/styled-system.ts',
    '!**/node_modules/**',
    '!<rootDir>/dist/**',
    '!**/*.{int,unit}.test.{ts,tsx,js,jsx}',
  ],
  coverageReporters: ['lcov', 'text-summary'],
}
