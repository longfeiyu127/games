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
    url: '/game/user/update',
    baseUrl: 'www.domain.com/',
    headers: {
      contentType: 'json'
    }
  }
}

const userApi = crearApiProxy(userConfig)

export default userApi
