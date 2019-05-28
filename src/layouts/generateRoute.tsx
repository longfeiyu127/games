import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import BaseLayout from './BaseLayout'
// import { IroutesConfig } from '@/routes/index.tsx'
import NotMatch from '@/views/404.tsx'

export const RouteWithSubRoutes = (routes: any) => {
  const { path, exact = false, strict = false, childRoutes } = routes
  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      render={(props: any) => {
        return (
          <BaseLayout {...props} routes={routes}>
            <routes.component {...props} routes={childRoutes} />
          </BaseLayout>
        )
      }}
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
