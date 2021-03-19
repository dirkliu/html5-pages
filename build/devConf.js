const path = require('path')
const webpack= require('webpack')
const {merge} = require('webpack-merge')
const baseConf = require('./baseConf')

module.exports = merge(baseConf, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
  },
  output: {
    filename: '[name]/main.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
    assetModuleFilename: (pathData, assetInfo) => {
      let filePath = path.dirname(pathData.filename).replace(/^\/*src\//, '')
      return filePath + '/[name][ext][query]'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
