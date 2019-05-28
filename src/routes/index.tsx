import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading/Loading.tsx'

export interface Iroute {
  path: string
  component?: React.ComponentType
  strict?: boolean
  exact?: boolean
}
// console.log(React)

export interface IroutesConfig extends Iroute {
  childRoutes?: Iroute[]
}

const page = (name: string) =>
  Loadable({
    loader: () => import(`../views/${name}`),
    loading: Loading
    // delay: 200,
    // timeout: 10000
  })

const routeConfig: IroutesConfig[] = [
  { path: '/', exact: true, strict: true, component: page('home/index.tsx') },
  {
    path: '/404',
    component: page('404.tsx')
  }
]
export default routeConfig
