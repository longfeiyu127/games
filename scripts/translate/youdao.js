/**
 *  Youdao Translate, My private account is for testing purposes only.
 *  Please go to the official account to apply for an account. Thank you for your cooperation.
 *  APP ID：58d4b52e02621966
 *  Secret key：0APQXcjlfIYTyidxA5p9GPSyq0vVrlcJ
 * Supported language:
 * 中文	zh-CHS
 * 英文	en
 * 日文	ja
 * 韩文	ko
 * 法文	fr
 * 西班牙文	es
 * 葡萄牙文	pt
 * 意大利文	it
 * 俄文	ru
 * 越南文	vi
 * 德文	de
 * 阿拉伯文	ar
 * 印尼文	id
 */
const axios = require('axios')
const sha256 = require('js-sha256')
const qs = require('qs')
const fs = require('fs')
const path = require('path')
const jsonFormat = require('json-format')
const utils = require('./utils')
const youdao = async ({ q, from, to }) => {
  const appKey = '58d4b52e02621966'
  const appse = '0APQXcjlfIYTyidxA5p9GPSyq0vVrlcJ'
  console.log(utils)
  const salt = utils.guid()
  const input = utils.getInput(q)
  const curtime = Math.round(new Date().getTime() / 1000)
  const sign = sha256(appKey + input + salt + curtime + appse)
  const query = qs.stringify({
    q,
    from,
    to,
    appKey,
    salt,
    curtime,
    sign,
    signType: 'v3'
  })
  const res = await axios.get(`http://openapi.youdao.com/api?${query}`)
  // console.log(res.data)
  const { data } = res
  if (data.query && data.translation[0]) {
    return data.translation[0]
  } else {
    return q
  }
}

const translateFile = async ({ key, content }) => {
  return new Promise(async (resolve, reject) => {
    const contentKeys = Object.keys(content)
    const from = 'zh-CHS'
    const to = 'ko'
    const tasks = contentKeys.map(async item => {
      console.log(`Start translating: ${from} -> ${to}:  ${item}`)
      const q = content[item]
      const res = await youdao({ q, from, to })
      return { [item]: res }
    })
    const res = await Promise.all(tasks)
    const result = Object.assign(...res)
    console.log(key, result)
    const outputPath = path.resolve(__dirname, `../testTranslate/${to}`)
    console.log('outputPath', outputPath)
    utils.mkdirs(outputPath, async err => {
      if (err) {
        reject(err)
        throw err
      }
      await fs.writeFileSync(
        `${outputPath}/${key}.json`,
        jsonFormat(result, {
          type: 'space',
          size: 2
        })
      )
      resolve({ [key]: res })
    })
  })
}

module.exports = translateFile
