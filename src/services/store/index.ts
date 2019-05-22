import { init } from '@rematch/core'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import user from './modules/user'

function createStore() {
  const store = init({
    models: {
      user
    },
    redux: {
      reducers: {
        reduxAsyncConnect
      }
    }
  })
  console.log(store)
  return store
}

const store = createStore()
export default store
