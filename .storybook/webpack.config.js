const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({ config, mode }) => {
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
              postcssOptions: {
                plugins: [["autoprefixer"]]
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
          path.resolve(__dirname, "../assets/img"),
          path.resolve(__dirname, "../assets/fonts"),
          path.resolve(__dirname, "../assets"),
        ]
      },
      {
        include: /\.(eot|ttf|woff|woff2|png|svg|ico|gif|jpg|pdf|webp)$/,
        loader: 'file-loader',
        type: 'javascript/auto',
        options: {
            name: '[path][name].[ext]',
            include: [
              path.resolve(__dirname, '../assets/img'),
              path.resolve(__dirname, '../assets/fonts'),
              path.resolve(__dirname, "../assets"),
            ]
        },
      },
      {
        test: /\.(stories|story)\.js?$/,
        loader: require.resolve('@storybook/source-loader'),
        exclude: [/node_modules/],
        enforce: 'pre'
      }
    ]);

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  );
  return config;
};
