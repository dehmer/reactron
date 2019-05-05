
// https://webpack.js.org/configuration/
//   Out of the box, webpack won't require you to use a configuration file.
//   However, it will assume the entry point of your project is src/index[.js]
//   and will output the result in dist/main.js minified and optimized for production.
//
const renderer = {

  entry: {
    // Creates a bundle named `renderer.js`:
    renderer: './src/index.js'
  },

  // https://webpack.js.org/configuration/target/
  //   Compile for Electron for renderer process, providing a target
  //   using JsonpTemplatePlugin, FunctionModulePlugin for browser
  //   environments and NodeTargetPlugin and ExternalsPlugin for
  //   CommonJS and Electron built-in modules.
  //
  // WTF?! This information is hardly useful.
  //
  target: 'electron-renderer',
  devtool: 'source-map', // source-map: production quality (slow)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        // css-loader: resolve/load required/imported CSS dependencies from JavaScript
        // style-loader: wrap CSS string from css-loader with <style> tag
        // Note: loaders are applied from right to left, i.e. css-loader -> style-loader
        //
        test: /\.css$/,
        use: ['style-loader', 'css-loader' ]
      }
    ]
  }
}

module.exports = [renderer]
