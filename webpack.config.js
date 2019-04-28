const path = require("path")

module.exports = {
  mode: "development", // production
  context: path.join(__dirname, "renderer"),
  target: 'electron-renderer',
  entry: ["./index.js"],
  output: {
    path: path.join(__dirname, "target/www"),
    filename: "renderer.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
}