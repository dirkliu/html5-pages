const fs = require('fs')
const express = require('express')
const path = require('path')
const opn = require('opn')
const app = new express()
const PORT = 9090
const root = path.join(__dirname, '../dist')

if (!fs.existsSync(root)) {
  // console.error('Production is not built, please run `yarn build` first.')
  throw new Error('Production is not built, please run `yarn build` first.')
}
fs.existsSync(path)
app.use(express.static(path.join(__dirname, '../dist')))

// 将文件 serve 到 port 9090。
app.listen(PORT, function () {
  console.log('Preview server listening on port ' + PORT + '!\n');
})

opn('http://localhost:' + PORT)
