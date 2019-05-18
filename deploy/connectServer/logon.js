const inquirer = require('inquirer')
const server = require('../config')

const promptList = [{
  type: 'username',
  message: 'Please enter your server account:',
  name: 'username',
  default: server.username
}, {
  type: 'password',
  message: 'Please enter the server password:',
  name: 'password'
}];


module.exports = () => {
  return inquirer.prompt(promptList).then(answers => {
    return {
      host: server.host,
      port: server.port,
      username: answers.username,
      password: answers.password
    }
  })
}