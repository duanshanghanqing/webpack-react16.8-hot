/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'js/bundle-[hash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'src': path.resolve('./src')
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   enforce: 'pre',
      //   options: {
      //     formatter: require('eslint-friendly-formatter'),
      //     emitWarning: true
      //   }
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules|packages/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
