
import path from 'path';
import { build, optimizeDeps } from 'vite';
import babel from 'vite-plugin-babel';
import htmlPurge from 'vite-plugin-html-purgecss';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    framework: '@storybook/react-vite',
    stories: ['./stories/*.mdx', './stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
      '@storybook/addon-a11y'
    ],
  optimizeDeps: {
    rolldownOptions: {
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      plugins: [babel()]
    }
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