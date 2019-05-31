const translateFile = require('./youdao')
const config = require('./config')

const locales = {}

const files = config.files

files.forEach(item => {
  locales[item] = require(`../../src/locales/zh/${item}.json`)
})

console.log(locales)

// const test = async () => {
//   const res = await youdao({ q: 'electroencephalography/game/get/a/one/two', from: 'en', to: 'zh-CHS' })
//   console.log('result', res)
// }
// test()

// const outputPath = path.resolve(__dirname, `../testTranslate/ko`)
// console.log('outputPath', outputPath)
// console.log('outputPath', outputPath)
// utils.mkdirs(outputPath, () => {
//   console.log('完成')
// })
const translate = () => {
  const localesKey = Object.keys(locales)
  console.log(localesKey)
  localesKey.map(async key => {
    await translateFile({ key, content: locales[key] })
  })
}

translate()
