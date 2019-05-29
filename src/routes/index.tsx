import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading/Loading.tsx'

export interface Iroute {
  path: string
  component?: React.ComponentType
  permission?: string[]
  title?: any
  strict?: boolean
  exact?: boolean
}

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
  {
    path: '/',
    title: {
      zh: '游戏圈',
      en: 'Games'
    },
    exact: true,
    strict: true,
    component: page('home/index.tsx')
    // childRoutes: [
    //   // childRoutes..
    // ]
  },
  {
    path: '/testPage/permission',
    permission: ['user'],
    title: {
      zh: '测试权限页面',
      en: 'Test permission page'
    },
    exact: true,
    strict: true,
    component: page('testPage/permission.tsx')
  },
  {
    path: '/404',
    title: {
      zh: '404',
      en: '404'
    },
    component: page('exception/index.tsx')
  }
]
export default routeConfig
