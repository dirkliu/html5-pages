const path = require('path')
const {merge} = require('webpack-merge')
const TerserPlugin = require("terser-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const baseConf = require('./baseConf')

module.exports = merge(baseConf, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // copy custom public assets
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name]/[name][chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      exclude: /static/
    })]
  }
})
