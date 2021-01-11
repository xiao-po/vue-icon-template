const WebpackMerge = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = WebpackMerge.merge(base, {
  entry: path.join(__dirname, `../example/src/index.ts`),
  mode: "development",
  devtool: "inline-source-map",
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"js/[name].js"
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./example/index.html",
    }),
    new VueLoaderPlugin(),
  ],
});
