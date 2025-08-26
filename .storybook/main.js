
const path = require('path');

export default {
    // Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
    framework: '@storybook/react-webpack5',
    stories: ['./stories/*.mdx', './stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: ['../public', '../static','../assets','../assets/fonts', '../assets/img']
};
module.exports = {
    stories: ['./**/stories/*.@(stories.@(js))','./**/stories/*.@(mdx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/blocks',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
        '@chromatic-com/storybook',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-interactions'
    ],
    webpack: (config, options) => {
        options.cache.set = () => Promise.resolve();
        return config;
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../src'), // Adjust path to your source directory
        });

        return config;
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {},
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};