process.env.NODE_ENV = 'development'

const express = require('express')
const opn = require('opn')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')
const config = require('./devConf.js')
const proxyConf = require('./proxyConf')
const app = new express()
const compiler = webpack(config)
const PORT = require('./env').port

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {
    console.log('hot reload')
  }
})

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyConf).forEach(function (context) {
  var options = proxyConf[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(createProxyMiddleware(options.filter || context, options))
})

// 将文件 serve 到 port 80。
app.listen(PORT, function () {
  console.log('Develop server listening on port ' + PORT + '!\n')
})

opn('http://localhost:' + PORT)
