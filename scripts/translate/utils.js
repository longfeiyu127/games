const fs = require('fs')
const path = require('path')

const guid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}

const getInput = str => {
  if (!str) {
    return ''
  }
  if (str.length <= 20) {
    return str
  } else {
    /** q前10个字符 + q长度 + q后十个字符 */
    const length = str.length
    return str.substr(0, 10) + str.length + str.substr(length - 10, length)
  }
}

const mkdirs = (pathname, callback) => {
  pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname)
  const relativePath = path.relative(__dirname, pathname)
  let floders = relativePath.split(path.sep)
  let pre = ''
  const _cb = err => {
    callback && callback(err)
  }
  floders.forEach((floder, index) => {
    try {
      let _stat = fs.statSync(path.join(__dirname, pre, floder))
      let hasMkdir = _stat && _stat.isDirectory()
      if (hasMkdir && floders.length === index + 1) {
        _cb()
      }
    } catch (error) {
      try {
        fs.mkdirSync(path.join(__dirname, pre, floder))
        if (floders.length === index + 1) {
          _cb()
        }
      } catch (error) {
        throw error
      }
    }
    pre = path.join(pre, floder)
  })
}

module.exports = {
  guid,
  getInput,
  mkdirs
}
