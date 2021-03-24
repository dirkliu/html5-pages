const path = require('path')
const {merge} = require('webpack-merge')
const TerserPlugin = require("terser-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const baseConf = require('./baseConf')
const {getEntry} = require('./entries')

module.exports = merge(baseConf, {
  entry: getEntry(),
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader, 
        'css-loader',
        {loader: 'qi-px2vw-loader'}
      ],
    },{
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader", 
        {loader: 'qi-px2vw-loader'}  
      ],
    }]
  },
  plugins: [
    // copy custom public assets
    new CleanWebpackPlugin(),

    // copy custom public assets
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static')
      }]
    }),

    new MiniCssExtractPlugin({
      filename: '[name]/[name].[chunkhash].css',
      chunkFilename: '[name]/[chunkhash].[id].css'
    }),
    new CssMinimizerPlugin()
  ],
  output: {
    filename: '[name]/[name].[chunkhash].js',
    chunkFilename: '[name]/[name].[chunkhash].[id].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
    assetModuleFilename: (pathData, assetInfo) => {
      let filePath = path.dirname(pathData.filename).replace(/^\/*src\//, '')
      return filePath + '/[name][contenthash][ext][query]'
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      exclude: /static/
    })]
  }
})
