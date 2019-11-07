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
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader", options: { url: false, sourceMap: true } },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }
        ]
      },
      // {
      //   test: /\.js$|jsx$/,
      //   loader: "babel-loader"
      // },
    ]
  );
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  );
  return config;
};
