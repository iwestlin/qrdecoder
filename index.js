const fs = require('fs')
const jsQR = require('jsqr')
const {PNG} = require('pngjs')

module.exports = function qrdecoder (file) {
  if (!fs.existsSync(file)) throw new Error('file not exist:' + file)
  const info = fs.readFileSync(file)
  const {data, width, height} = PNG.sync.read(info)
  const result = jsQR(data, width, height)
  return result && result.data
}
