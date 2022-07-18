module.exports = {
    stories: ['./**/stories/*.stories.@(mdx|js)'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
    ],
    core: {
        builder: 'webpack5',
    },
  };
