// const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/build",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 8000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["styled-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),
  ],
};
