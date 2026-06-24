// This file has been automatically migrated to valid ESM format by Storybook.

import path, { dirname } from 'path';
import {fileURLToPath} from 'url';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { mergeConfig } from 'vite';

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
    staticDirs: ['../assets','../assets/fonts', '../assets/img', '../styles'],
    addons: [
      "@storybook/addon-links",
      "@chromatic-com/storybook",
      "@storybook/addon-docs",
      '@storybook/addon-vitest',
      '@storybook/addon-a11y',
    ],
  async viteFinal(config) {
    return mergeConfig(config, {
    });
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};