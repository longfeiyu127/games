import { Toast } from 'antd-mobile'
import { stringify } from 'qs'
import UserModule from '@/services/store/modules/user.ts'

import { apiPrefix } from '@/config/base.ts'

const errorCodeMessage: any = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限（令牌、用户名、密码错误）',
  403: '用户得到授权，但是访问是被禁止的',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  405: '请求被禁止',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到的',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器内部错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

const methods = ['post', 'put', 'patch']

const urlPlaceholder = /\$\{\w+\}/
function format(str: string, obj: any) {
  console.log(obj)
  Object.keys(obj).map((key: string) => {
    str = str.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), obj[key])
  })
  return str
}

export const request = [
  (config: any): object => {
    let { url, data, method = 'GET' } = config
    if (urlPlaceholder.test(url)) {
      url = format(url, data)
    }
    const headers = {
      'X-Token': `Bearer ${UserModule.token || null}`,
      ...config.headers
    }
    const dataName = method && methods.includes(method.toLowerCase()) ? 'data' : 'params'
    return {
      url: `${apiPrefix}${url}`,
      [dataName]: data,
      paramsSerializer(params: object) {
        return stringify(params)
      },
      transformRequest: [(data: any) => JSON.stringify(data)],
      method,
      headers
    }
  },
  (error: any) => {
    console.log(error)
    return Promise.reject(error)
  }
]

export const response = [
  // tslint:disable-next-line:no-shadowed-variable
  (response: any) => {
    const res = JSON.parse(response.data)
    if (res.resCode !== 0 && !response.config.headers.hideMsg) {
      Toast.fail(`error with resCode: ${res.resMsg}`)
      if (res.resCode === 401) {
        // 跳转登录页面
      }
      console.log(res.resMsg)
      // new Error(`error with resCode: ${res.resMsg}`)
      // return Promise.reject(`error with resCode: ${res.resMsg}`)
      return res
    } else {
      return res
    }
  },
  (err: any) => {
    console.log('err', err)
    if (err && err.response) {
      err.message = errorCodeMessage[err.response.status] || '请求错误'
    }
    Toast.fail(err.message)
    return Promise.reject(err)
  }
]
