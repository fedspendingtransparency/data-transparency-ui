module.exports = {
    stories: ['./**/stories/*.stories.@(mdx|js)'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@storybook/addon-actions'
    ],
  };