import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import BaseLayout from './BaseLayout'
// import { IroutesConfig } from '@/routes/index.tsx'
import Exception from '@/views/exception/index.tsx'

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
            {childRoutes && <GenerateRoute config={childRoutes} />}
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
        {<Route component={() => <Exception type="404" />} />}
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(GenerateRoute)
