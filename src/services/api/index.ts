import request from './request.tsx'

export interface ApiConfig {
  url: string
  method?: string
  baseUrl?: string
  headers?: any
}

export const crearApi = (config: ApiConfig) => async (data: any) => request({ ...config, data })
export const crearApiProxy = (config: ApiConfig) => {
  return new Proxy(config, {
    get(target: any, property) {
      if (property in target) {
        return crearApi(target[property])
      } else {
        throw new ReferenceError(`crearApi: ${target.toString()} does not include ${property.toString()}`)
      }
    }
  })
}

// const modules: any = {}
// const modulesConfig = {}
// let req = require.context('./modules/', true, /^(.*\.(ts$))[^.]*$/im)
// // console.log(req.keys())
// req.keys().map((key: string) => {
//   // console.log(key)
//   const _moduleName = key.replace('./', '').replace('.ts', '')
//   const obj = req(key).default
//   // console.log(obj)
//   const API = new Proxy(obj, {
//     get(target, property) {
//       if (property in target) {
//         return crearApi(target[property])
//       } else {
//         throw new ReferenceError(`crearApi: ${property.toString()} does not include ${property.toString()}`)
//       }
//     }
//   })
//   modules[_moduleName] = API
// })
// export default modules
