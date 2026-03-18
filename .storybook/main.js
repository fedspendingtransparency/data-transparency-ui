// This file has been automatically migrated to valid ESM format by Storybook.

import path, { dirname } from 'path';
import babel from 'vite-plugin-babel';
import htmlPurge from 'vite-plugin-html-purgecss';
import {fileURLToPath} from 'url';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    framework: '@storybook/react-vite',
    stories: ['./**/stories/*.@(stories.@(jsx))','./**/stories/*.@(mdx)'],
    core: {
        builder: '@storybook/builder-vite',
    },
    build: {
        outDir: path.resolve(__dirname, "./docs"),
        emptyOutDir: true
    },
    staticDirs: ['../public', '../static','../assets','../assets/fonts', '../assets/img', '../styles'],
    addons: [
      "@storybook/addon-links",
      "@chromatic-com/storybook",
      "@storybook/addon-docs",
      '@storybook/addon-vitest',
      '@storybook/addon-a11y',
      '@babel/plugin-syntax-jsx'
    ],
  optimizeDeps: {
    rolldownOptions: {
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      plugins: [babel()]
    },
    include: ['esm-dep > cjs-dep'],
    needsInterop: ['storybook/internal/csf', 'storybook/internal/preview/runtime']
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins ?? []), htmlPurge.default()],
    };
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};