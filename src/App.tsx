import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import router from '@/routes/index.tsx'
import LocaleLayout from '@/layouts/LocaleLayout.tsx'
import GenerateRoute from '@/layouts/generateRoute.tsx'
import { Provider } from 'react-redux'
import store from '@/services/store/index.ts'

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <LocaleLayout>
          <Router>
            <GenerateRoute config={router} />
          </Router>
        </LocaleLayout>
      </Provider>
    )
  }
}
