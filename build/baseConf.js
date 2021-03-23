const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {entryDirs} = require('./entries')
module.exports = {
  externals: {
    'vue': 'Vue',
    // 'vant': 'vant'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ['vue-style-loader', 'css-loader', {
            loader: path.resolve(__dirname, './loaders/px2vw')
          }],
          scss: ['vue-style-loader', 'css-loader', 'sass-loader', {loader: path.resolve(__dirname, './loaders/px2vw')}]
        }
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 1024 // 1kb
        }
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 1024 // 1kb
        }
      }
    }]
  },
  plugins: entryDirs.map(item => new HtmlWebpackPlugin({
    filename: './' + item + '.html',
    template: './src/' + item + '.html',
    chunks: [item],
    inject: true,
    "minify": {
      "removeComments": true,
      "collapseWhitespace": true,
      "removeAttributeQuotes": true
    }
  })).concat([
    new VueLoaderPlugin()
  ])
}
