import { crearApiProxy } from '../index.ts'
const userConfig = {
  login: {
    method: 'POST',
    url: '/game/user/access/login'
  },
  logout: {
    method: 'POST',
    url: '/game/user/access/logout'
  },
  getUsers: {
    url: '/game/user'
  },
  updateUser: {
    method: 'POST',
    url: '/game/user/update'
  }
}

const userApi = crearApiProxy(userConfig)

export default userApi
