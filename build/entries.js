const fs = require('fs')
const path = require('path')
const srcPath = path.resolve(__dirname, '../', './src')
let entryDirs = []
try{
  entryDirs = fs.readdirSync(srcPath, {
    withFileTypes: true
  }).filter(item => {
    return item.isDirectory() && fs.existsSync(path.resolve(srcPath, item.name, 'main.js'))
  }).map(item => item.name)
} catch (err) {
  throw err
}

function getEntries(entries, isDevelop) {
  var entry = {}
  entries.forEach(item => {
    entry[item] = ['./src/' + item + '/main']
    isDevelop && entry[item].unshift('webpack-hot-middleware/client')
  })
  return entry
}

module.exports = {
  entryDirs,
  getEntry (isDevelop) {
    return getEntries(entryDirs, isDevelop)
  }
}