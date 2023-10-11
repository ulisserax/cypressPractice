const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.js',
    supportFile: 'cypress/support/commands.js',
    excludeSpecPattern: ['**/1-getting-started/*', '2-advanced-examples/*'],
    setupNodeEvents
  },
  env: {
    MAILOSAUR_API_KEY: "17Z7XOnNhAWQdP5citaujzUVm1399a6E",
    ServerID: "1kuyqwtd",
    email: "you-farther@1kuyqwtd.mailosaur.net",
    password: "yuHtr432923@"
  }

});
