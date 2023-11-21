export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['./jest.polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.env.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg)$':
      '<rootDir>/src/test/__ mocks __/fileMock.ts',
    '\\.(css)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/src/api.ts',
    '<rootDir>/src/test/__ mocks __',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'dist', 'build'],
};
