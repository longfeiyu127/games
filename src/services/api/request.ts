import axios from 'axios'
import { request, response } from './interceptors'

export const headers = {
  'Content-Type': 'application/json',
  'X-Session-Mode': 'header'
}

const service = axios.create({
  headers,
  method: 'GET',
  baseURL: '/',
  timeout: 5000
})

// Request interceptors
service.interceptors.request.use(...request)

// Response interceptors
service.interceptors.response.use(...response)

export default service
