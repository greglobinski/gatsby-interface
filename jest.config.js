module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+prismCodeThemes.+\\.(css|styl|less|sass|scss)$": `<rootDir>/__mocks__/styleMock.js`,
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$": `<rootDir>/__mocks__/fileMock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `cypress`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jest-setup.js`],
  setupTestFrameworkScriptFile: `<rootDir>/setup-test-env.js`,
}
