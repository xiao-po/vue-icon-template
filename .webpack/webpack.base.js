const path = require("path");
const IconGeneratePlugin = require("../build-tools/generate/plugin");

module.exports = {
  entry: path.join(__dirname, `../lib/index.tsx`),
  target: "web",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/src"),
  },
  module: {
    // 配置相应的规则
    rules: [
      {
        test: /\.(md|svg)$/,
        exclude: /node_modules/,
        use: ["html-loader"],
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader']
      },
      {
        test: /\.js[x]?$/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.ts[x]?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            }
          },
        ]
      },

    ],
  },
  resolve: {
    extensions: ["js", "ts", "tsx", "json", "jsx"].map((e) => `.${e}`),
  },
  plugins: [new IconGeneratePlugin()],
};
