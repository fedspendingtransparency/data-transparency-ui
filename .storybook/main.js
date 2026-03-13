
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    framework: '@storybook/react-webpack5',
    stories: ['./stories/*.mdx', './stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: ['../public', '../static','../assets','../assets/fonts', '../assets/img'],
    addons: [
    "@storybook/addon-links",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-styling-webpack",
    ],
  webpack: (config, options) => {
      options.cache.set = () => Promise.resolve();
      return config;
  },
  webpackFinal: async (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules.push({
            test: /\.js$|jsx$/,
            exclude: /node_modules\.*/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader"
                }
            ]
        },
        {
            include: /\.(eot|ttf|woff|woff2|png|svg|ico|gif|jpg|pdf|webp)$/,
            loader: 'file-loader',
            type: 'javascript/auto',
            options: {
                name: '[path][name].[ext]'
            }
        },
        {
            test: /\.scss$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: "css-loader", options: { url: false, sourceMap: true } },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                        sassOptions: {
                            includePaths: ["./src/_scss", "./node_modules"]
                        }
                    }
                }
            ]
    });
    return config;
  },
    docs: {},
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};