import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: "playwrights/utils/globalSetup.ts",
  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {

    trace: 'on-first-retry',
  },


  projects: [
    {
      name: "NoHaveBrowser",
      use: {}
    }
  ],
});
