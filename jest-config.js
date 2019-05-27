module.exports = {
  rootDir: '..',
  setupFiles: [
    '<rootDir>/test-config/test-shim.js',
    '<rootDir>/test-config/test-setup.js'
  ],
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}', '!/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/test-config/setupEnzyme.ts',
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/test-config/test-preprocessor.js'
  },
  testMatch: ['<rootDir>/src/**/*.(ts|tsx|js)']
};
