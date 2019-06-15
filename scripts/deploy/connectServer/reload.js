const scpClient = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const server = require('../config')

const spinner = ora(`Publishing to server in progress...\n`)

const Client = require('ssh2').Client

const conn = new Client()

const update = (stream, serverConf, updateFile) => {
  stream
    .on('close', (code, signal) => {
      spinner.start()
      if (updateFile) updateFile(serverConf, err => spinner.stop())
      conn.end()
    })
    .on('data', data => {
      console.log(`STDOUT: ${data}`)
    })
    .stderr.on('data', data => {
      console.log(`STDERR: ${data}`)
    })
}

const reloadServer = (serverConf, updateFile) => {
  conn
    .on('ready', () => {
      conn.exec(`rm -rf ${server.staticPath}\ncd ${server.nginxPath}/sbin \n./nginx -s reload`, (err, stream) => {
        if (err) throw err
        console.log(chalk.green(`reload nginx success! \n`))
        update(stream, serverConf, updateFile)
      })
    })
    .connect({
      ...serverConf
      // privateKey: require('fs').readFileSync('/home/admin/.ssh/id_dsa')
    })
}

module.exports = (serverConf, updateFile) => {
  scpClient.scp(
    './nginx.conf',
    {
      ...serverConf,
      path: `${server.nginxPath}/conf/nginx.conf`
    },
    err => {
      if (err) {
        console.log(chalk.red('\nReplace nginx.conf failed.\n'))
        throw err
      } else {
        console.log(chalk.green(`\nReplace nginx.conf success! \n`))
        reloadServer()
      }
    }
  )
}
