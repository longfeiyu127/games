const ora = require('ora')
const translateFile = require('./youdao')
const command = require('./command')
const config = require('./config')

const spinner = ora(`In translation...\n`)

const locales = {}

const files = config.files

files.forEach(item => {
  locales[item] = require(`../../src/locales/zh/${item}.json`)
})

const translate = async () => {
  const answers = await command()
  const localesKey = Object.keys(locales)
  spinner.start()
  const tasks = localesKey.map(async key => {
    return translateFile({ key, content: locales[key], to: answers.language, appse: answers.appse })
  })
  await Promise.all(tasks)
  spinner.stop()
}

translate()
