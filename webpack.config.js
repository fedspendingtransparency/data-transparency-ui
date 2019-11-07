const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    // context: path.resolve(__dirname, "./storybook"),
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, './component-lib-export'),
      filename: 'index.js',
      library: '',
      libraryTarget: 'commonjs'
    },
    resolve: {
      extensions: [".js", ".jsx"],
      modules: ["node_modules", path.resolve(__dirname, ".storybook/components")]
    },
    module: {
      rules: [
        {
          test: /\.js$|jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
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
                    sourceMap: true
                    // includePaths: ["./", "./node_modules"]
                }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "data-transparency-ui.css"
      })
    ]
};
