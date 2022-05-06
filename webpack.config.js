const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
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
    ],
        
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Virtual Keyboard",
        inject: "body",
        scriptLoading: "blocking",
        favicon: "./src/assets/favicon.ico"
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  watch: true
};