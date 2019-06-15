import { init } from '@rematch/core'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import user from './modules/user'
import home from './modules/home'
import base from './modules/base'
import games from './modules/games/index'

function createStore() {
  return init({
    models: {
      user,
      home,
      base,
      ...games
    },
    redux: {
      reducers: {
        reduxAsyncConnect
      }
    }
  })
}

const store = createStore()
export default store
