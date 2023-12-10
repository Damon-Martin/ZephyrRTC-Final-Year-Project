import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "https://localhost/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
