const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.scss$/i,
              use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  watch: true
};