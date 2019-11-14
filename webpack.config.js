const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
      library: 'data-transparency-ui',
      libraryTarget: 'umd',
      publicPath: '/dist/',
      umdNamedDefine: true
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
              loader: "postcss-loader",
              options: {
                indent: 'postcss',
                plugins: [require('autoprefixer')]
              }
            },
            {
                loader: "sass-loader"
            }
          ]
        }
      ]
    },
    externals: {
      // Don't bundle react or react-dom
      react: {
          commonjs: "react",
          commonjs2: "react",
          amd: "React",
          root: "React"
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "data-transparency-ui.css"
      })
    ]
};
