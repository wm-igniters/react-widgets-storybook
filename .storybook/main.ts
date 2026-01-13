import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    // "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    // "@storybook/addon-a11y",
    "@storybook/addon-docs",
    // Note: Design Tokens addon is loaded via manager.ts import
    // Explicitly configure essentials addon to disable Actions and Interactions
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,      // Disable Actions tab
        interactions: false, // Disable Interactions tab
        backgrounds: true,   // Keep backgrounds
        controls: true,      // Keep controls
        viewport: true,      // Keep viewport
        toolbars: true,      // Keep toolbars
        measure: true,       // Keep measure
        outline: true,       // Keep outline
      },
    },
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ],
  async viteFinal(config) {
    // Mock @wavemaker/variables for Storybook
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@wavemaker/variables': new URL('./mocks/variables.ts', import.meta.url).pathname,
    };
    return config;
  },
};
export default config;