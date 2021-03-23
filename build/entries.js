const fs = require('fs')
const path = require('path')

let entryDirs = []
try{
  entryDirs = fs.readdirSync(path.resolve(__dirname, '../', './src'), {
    withFileTypes: true
  }).filter(item => item.isDirectory()).map(item => item.name)
} catch (err) {
  throw err
}

function getEntries(entries, isDevelop) {
  var entry = {};
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