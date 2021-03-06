const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

let libraryName = "UndoRedoPack";

let plugins = [],
  outputFile;

outputFile = libraryName + ".min.js";

const config = {
  mode: "development",
  entry: __dirname + "/src/js/index.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/build",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src/js")],
    extensions: [".json", ".js"],
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  // plugins: plugins
};

module.exports = config;
