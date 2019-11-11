module.exports = {
  preset: '@testing-library/react-native',
  cacheDirectory: './cache',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|@react-navigation)/',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
};
