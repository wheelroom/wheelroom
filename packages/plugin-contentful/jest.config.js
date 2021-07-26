module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@wheelroom/push/plain': '<rootDir>/../../packages/push/build/plain.cjs',
  },
}
