const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
