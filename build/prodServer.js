process.env.NODE_ENV = 'production'

const fs = require('fs')
const express = require('express')
const path = require('path')
const opn = require('opn')
const { createProxyMiddleware } = require('http-proxy-middleware')
const proxyConf = require('./proxyConf')
const app = new express()
const {port} = require('./env')
const root = path.join(__dirname, '../dist')

if (!fs.existsSync(root)) {
  // console.error('Production is not built, please run `yarn build` first.')
  throw new Error('Production is not built, please run `yarn build` first.')
}
fs.existsSync(path)
app.use(express.static(path.join(__dirname, '../dist')))

// proxy api requests
Object.keys(proxyConf).forEach(function (context) {
  var options = proxyConf[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(createProxyMiddleware(options.filter || context, options))
})

// 将文件 serve 到 port 9090。
app.listen(port, function () {
  console.log('Preview server listening on port ' + port + '!\n');
})

opn('http://localhost:' + port)
