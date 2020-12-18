const path = require("path");
const ExctratTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExctratTextPlugin({
    filename: "styles.css"
})

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist"
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }]
        },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
          test: /\.scss$/,
          use: extractPlugin.extract({
              use: ["css-loader", "sass-loader"]
          })
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {

        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],

      },

      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
      extractPlugin
  ]
};
