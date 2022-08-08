import { defineConfig } from 'cypress'

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  viewportWidth: 1600,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    supportFile: false
  },
})
