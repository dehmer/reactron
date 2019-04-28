const path = require("path")

const rendererConfiguration = {

  // https://webpack.js.org/configuration/target/
  //   Compile for Electron for renderer process, providing a target
  //   using JsonpTemplatePlugin, FunctionModulePlugin for browser
  //   environments and NodeTargetPlugin and ExternalsPlugin for
  //   CommonJS and Electron built-in modules.
  //
  // WTF?! This information is hardly useful.
  target: 'electron-renderer',

  // default bundle name: main.js
  entry: './renderer/index.js',
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

module.exports = [rendererConfiguration]
