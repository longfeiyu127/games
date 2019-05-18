const logon = require('./connectServer/logon')
const reload = require('./connectServer/reload')
const updateFile = require('./connectServer/updateFile')

logon().then(serverConf => {
  reload(serverConf, updateFile)
})