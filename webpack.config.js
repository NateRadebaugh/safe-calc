const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "safe-math.js",
    library: "safeMath",
    libraryTarget: "umd"
  },
  plugins: [new CleanWebpackPlugin(["dist"])]
};
