module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [`/node_modules/`],
  setupFiles: ['./test-config/setupEnzyme.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      diagnostics: false
    }
  }
};
