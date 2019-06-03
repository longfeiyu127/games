const inquirer = require('inquirer')
const config = require('./config')

const promptList = [
  {
    type: 'list',
    name: 'language',
    choices: config.locales.map(item => item.value)
  },
  {
    type: 'input',
    name: 'appse'
  }
]

module.exports = async () => {
  const answers = await inquirer.prompt(promptList)
  const language = config.locales.find(item => item.value === answers.language)
  return {
    language: language.key,
    appse: answers.appse
  }
}
