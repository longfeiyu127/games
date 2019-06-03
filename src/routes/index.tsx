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
  childRoutes?: Iroute[]
}

const page = (name: string) =>
  Loadable({
    loader: () => import(`../views/${name}`),
    loading: Loading
    // delay: 200,
    // timeout: 10000
  })

const routeConfig: Iroute[] = [
  {
    path: '/',
    title: {
      zh: '游戏圈',
      en: 'Games'
    },
    // exact: true,
    // strict: false,
    component: page('home/index.tsx'),
    childRoutes: [
      {
        path: '/developers',
        title: {
          zh: '开发者',
          en: 'developers'
        },
        exact: true,
        component: page('developers/developers.tsx')
      }
    ]
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
