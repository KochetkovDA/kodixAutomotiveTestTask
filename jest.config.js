module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['vue', 'js'],
  moduleNameMapper: {
    '^src(.*)': '<rootDir>/src$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
};
