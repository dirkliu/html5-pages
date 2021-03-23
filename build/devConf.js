const path = require('path')
const webpack= require('webpack')
const {merge} = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConf = require('./baseConf')
const {getEntry} = require('./entries')

module.exports = merge(baseConf, {
  entry: getEntry(true),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dev'),
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: path.resolve(__dirname, './loaders/px2vw')}
      ],
    },{
      test: /\.s[ac]ss$/i,
      use: [        
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'},
        {loader: path.resolve(__dirname, './loaders/px2vw')}
      ],
    }]
  },
  output: {
    filename: '[name]/main.js',
    path: path.resolve(__dirname, '../dev'),
    clean: true,
    publicPath: '/',
    assetModuleFilename: (pathData, assetInfo) => {
      let filePath = path.dirname(pathData.filename).replace(/^\/*src\//, '')
      return filePath + '/[name][ext][query]'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // copy custom public assets
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dev/static')
      }]
    })
  ]
})
