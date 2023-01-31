const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 414,
    viewportHeight: 736,
  },
});