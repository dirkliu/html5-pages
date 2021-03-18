const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let entryDirs = []
try{
  entryDirs = fs.readdirSync(path.resolve(__dirname, '../', './src'), {
    withFileTypes: true
  }).filter(item => item.isDirectory()).map(item => item.name)
} catch (err) {
  throw err
}

function getEntries(entries) {
  var entry = {};
  entries.forEach(item => {
    entry[item] = './src/' + item + '/main'
  })
  return entry
}

module.exports = {
  entry: getEntries(entryDirs),
  externals: {
    'vue': 'Vue',
    'vant': 'vant'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ['vue-style-loader', 'css-loader'],
          scss: ['vue-style-loader', 'css-loader', 'sass-loader']
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
    new VueLoaderPlugin(),
    // copy custom public assets
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static')
      }]
    })
  ])
}
