// This file has been automatically migrated to valid ESM format by Storybook.

import path, { dirname } from 'path';
import htmlPurge from 'vite-plugin-html-purgecss';
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
      plugins: [
        react({
          babel: {
            // Add your custom Babel plugins here
            plugins: [
              'babel-plugin-react-compiler', // Example: For React 19 optimization,
              "@babel/plugin-syntax-jsx",
              "@babel/plugin-transform-runtime",
              "@babel/plugin-transform-object-rest-spread",
              "@babel/plugin-transform-class-properties",
              "@babel/plugin-transform-optional-chaining",
              ["@babel/plugin-transform-react-jsx", {pragmaFrag: "React.Fragment"}]
            ],
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // Set to true if you want Vite to read your root .babelrc file
              babelrc: false, 
              configFile: false,
          }
        })
      ]
    });
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};