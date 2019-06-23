module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [`/node_modules/`],
  setupFiles: ['./test-config/setupEnzyme.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@module-error/(.*)':
      '<rootDir>/src/components/errors-warnings-messages/$1'
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      diagnostics: false
    }
  }
};
