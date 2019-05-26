import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading/Loading.tsx'
// const Loading = () => <div>Loading...</div>
const page = (name: string) =>
  Loadable({
    loader: () => import(`../views/${name}`),
    loading: Loading
    // delay: 200,
    // timeout: 10000
  })

const Layout = Loadable({
  loader: () => import(`../layouts/testLayout`),
  loading: Loading
})

const routeConfig = [
  { path: '/', exact: true, strict: true, component: page('home/index.tsx') }
  // {
  //   path: '/404',
  //   component: page('notMatch/index.tsx')
  // }
]
export default routeConfig
