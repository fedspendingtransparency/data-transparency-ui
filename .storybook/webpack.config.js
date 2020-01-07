const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({ config, mode }) => {
  console.log("working dir", path.resolve(__dirname));
  config.resolve = {
    ...config.resolve,
    extensions: [
      ...config.resolve.extensions,
      ".js",
      ".jsx"
    ],
    modules: [
      "../node_modules",
      ...config.resolve.modules,
    ]
  }
  config.module.rules.push(
    ...[
    {
      test: /\.scss$/,
      use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { url: false, sourceMap: true } },
          { loader: 'resolve-url-loader' },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              indent: 'postcss',
              plugins: [require('autoprefixer')],
              config: {
                path: path.resolve(__dirname, "../postcss.config.js")
              }
            }
          },
          {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
          }
        ],
        include: [
          path.resolve(__dirname, "../styles"),
          path.resolve(__dirname, "../img"),
          path.resolve(__dirname, "../fonts")
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|svg|ico|gif|jpg)$/,
        use: [{
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          },
        }],
        include: [
          path.resolve(__dirname, '../img'),
          path.resolve(__dirname, '../fonts')
        ],
      },
      {
        test: /\.(stories|story)\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            // may or may not need this line depending on your app's setup
            options: {
              plugins: ['@babel/plugin-transform-react-jsx'],
            },
            {
                test: /\.(stories|story)\.mdx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        // may or may not need this line depending on your app's setup
                        options: {
                            plugins: ['@babel/plugin-transform-react-jsx']
                        }
                    },
                    {
                        loader: '@mdx-js/loader',
                        options: {
                            compilers: [createCompiler({})]
                        }
                    }
                ]
            },
            {
                test: /\.(stories|story)\.js?$/,
                loader: require.resolve('@storybook/source-loader'),
                exclude: [/node_modules/],
                enforce: 'pre'
            }
        ]
    );
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    );
    return config;
};
