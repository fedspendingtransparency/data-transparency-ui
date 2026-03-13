
import path from 'path';
import babel from 'vite-plugin-babel';
import htmlPurge from 'vite-plugin-html-purgecss'

export default {
    framework: '@storybook/react-vite',
    stories: ['./stories/*.mdx', './stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    core: {
        builder: '@storybook/builder-vite',
    },
    staticDirs: ['../public', '../static','../assets','../assets/fonts', '../assets/img'],
    addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    ],
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins ?? []), htmlPurge(), babel()],
    };
  },
    docs: {},
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};