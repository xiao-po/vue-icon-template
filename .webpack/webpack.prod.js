const WebpackMerge = require("webpack-merge");
const base = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = WebpackMerge.merge(base, {
  mode: "production",
  entry: path.join(__dirname, `../lib/index.ts`),
  output: {
    path: path.join(__dirname, "../src/"),
    filename: "index.js",
    library: "@x-component/icon",
    // 采用通用模块定义
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          "babel-loader",
          "ts-loader"
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  externals: {
    // 定义外部依赖，避免把react和react-dom打包进去
    vue: {
      root: "Vue",
      commonjs2: "vue",
      commonjs: "vue",
      amd: "vue",
    },
  },
});
