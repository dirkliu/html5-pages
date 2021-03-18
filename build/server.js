const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./devConf.js');
const app = new express()
const compiler = webpack(config)

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {
    console.log('hot reload')
  }
})

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(hotMiddleware)

// 将文件 serve 到 port 8080。
app.listen(8080, function () {
  console.log('App listening on port 8080!\n');
})
