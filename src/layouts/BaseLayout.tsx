import React from 'react'
import { connect } from 'react-redux'
import Exception from '@/views/exception/index.tsx'

interface Iprops {
  children: React.ReactElement<any> | null
  userPermission: string[]
  setTitle: Function
  routes: any
}

const BaseLayout = (props: Iprops) => {
  const { children, routes = {}, userPermission = [], setTitle } = props
  const { permission: routePermission } = routes
  const hasPermission = routePermission
    ? routePermission.some((rPermission: string) =>
        userPermission.some((uPermission: string) => uPermission === rPermission)
      )
    : true
  if (hasPermission) {
    const { title = null } = routes
    if (title) {
      setTitle(title)
    }
  } else {
    setTitle({
      zh: '无权限',
      en: 'No Access'
    })
  }
  return <React.Fragment>{hasPermission ? children : <Exception type="401" />}</React.Fragment>
}

const mapStateToProps = (state: any) => ({
  userPermission: state.user.permission
})

const mapDispatchToProps = (dispatch: any) => ({
  setTitle: dispatch.base.setTitle
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseLayout)
