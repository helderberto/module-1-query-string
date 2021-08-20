module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsConfig: 'tsconfig.json',
    },
    testPathIgnorePatterns: ['/node_modules/', 'build'],
  },
};
