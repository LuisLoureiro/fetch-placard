const iconv = require('iconv')

module.exports = function convertISO88591ToUTF8 (buffer) {
  const ic = new iconv.Iconv('iso-8859-1', 'utf-8')
  return ic.convert(buffer)
}
