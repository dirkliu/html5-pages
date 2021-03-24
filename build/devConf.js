const path = require('path')
const webpack= require('webpack')
const {merge} = require('webpack-merge')
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
        {
          loader: 'qi-px2vw-loader'
        }
      ],
    },{
      test: /\.s[ac]ss$/i,
      use: [        
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'},
        {
          loader: 'qi-px2vw-loader'
        }
      ],
    }]
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
