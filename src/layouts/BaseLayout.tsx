import React from 'react'
import { connect } from 'react-redux'
import NoAdmission from '@/views/401.tsx'

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
  return <React.Fragment>{hasPermission ? children : <NoAdmission />}</React.Fragment>
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
