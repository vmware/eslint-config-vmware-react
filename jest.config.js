/* eslint-disable prettier/prettier */
module.exports = {
  // pattern uses to find the test files
  testRegex: 'test/.*\\.test\\.(js|ts|tsx)$',

  transform: {
    '^.+\\.(js|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
};
