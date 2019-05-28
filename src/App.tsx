import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import router from '@/routes/index.tsx'
import GenerateRoute from '@/layouts/generateRoute.tsx'
import { Provider } from 'react-redux'
import store from '@/services/store/index.ts'

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <GenerateRoute config={router} />
        </Router>
      </Provider>
    )
  }
}
