const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/js/index.js"),
  output: {
    path: path.join(__dirname, "docs/static/js"),
    filename: "p0keutils.js",
  },
};
