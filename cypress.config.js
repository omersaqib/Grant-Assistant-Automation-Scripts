const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: 'ghkahk',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        VALID_EMAIL: process.env.CYPRESS_VALID_EMAIL,
        VALID_PASSWORD: process.env.CYPRESS_VALID_PASSWORD,
        INVALID_EMAIL: process.env.CYPRESS_INVALID_EMAIL,
        INVALID_PASSWORD: process.env.CYPRESS_INVALID_PASSWORD,
      }
      return config
    },
  },
  env: {
    environment: 'dev', // default environment
    baseUrl: {
      dev: 'https://dev.grantassistant.ai',
      demo: 'https://demo.grantassistant.ai',
      platform: 'https://platform.grantassistant.ai'
    }
  }
});
