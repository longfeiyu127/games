const defaultLanguage = 'zh-CHS'
const locales = [
  {
    key: 'en',
    value: 'English'
  },
  {
    key: 'ja',
    value: '日本語'
  },
  {
    key: 'ko',
    value: '한국어'
  },
  {
    key: 'ru',
    value: 'русский язык '
  },
  {
    key: 'de',
    value: 'Deutsch'
  }
]

const outputPath = '../../src/locales/'
const files = ['components', 'home', 'me']

module.exports = {
  defaultLanguage,
  locales,
  outputPath,
  files
}
