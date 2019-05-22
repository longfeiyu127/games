import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NotMatch from '@/views/404.tsx'

export const RouteWithSubRoutes = (route: any) => {
  const { path, exact = false, strict = false, childRoutes } = route
  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      render={(props: any) => <route.component {...props} routes={childRoutes} />}
    />
  )
}
const GenerateRoute = (props: any) => {
  return (
    <React.Fragment>
      <Switch>
        {props.config
          .map((route: any, i: number) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })
          .reverse()}
        {<Route component={NotMatch} />}
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(GenerateRoute)
