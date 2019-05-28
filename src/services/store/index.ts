import { init } from '@rematch/core'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import user from './modules/user'
import home from './modules/home'
import base from './modules/base'

function createStore() {
  const store = init({
    models: {
      user,
      home,
      base
    },
    redux: {
      reducers: {
        reduxAsyncConnect
      }
    }
  })
  // console.log(store)
  return store
}

const store = createStore()
export default store
