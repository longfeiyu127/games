const scpClient = require('scp2')
const chalk = require('chalk')
const server = require('../config')

module.exports = (serverConf, cb) => {
  scpClient.scp(
    './build', {
      ...serverConf,
      path: server.staticPath
    },
    err => {
      if (err) {
        console.log(chalk.red('deploy failed.\n'))
        throw err
      } else {
        console.log(chalk.green(`deploy success! Successfully released to production! \n`))
        // console.log(chalk.green(`deploy success! Successfully released to ${process.env.NODE_ENV === 'prod' ? 'production' : 'testing'}! \n`))
      }
      if (cb) cb(err)
    }
  )
}