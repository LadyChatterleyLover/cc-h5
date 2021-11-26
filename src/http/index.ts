import axios, { AxiosError, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'

const http = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 10000
})

http.interceptors.response.use((res: AxiosResponse) => {
  return res.data
}, (err: AxiosError) => {
  let status = err.response && err.response.status
  if (status === 400) {
    message.error('参数错误')
  }
  if (status === 401) {
    message.error('登录过期')
  }
  if (status === 403) {
    message.error('没有权限')
  }
  if (status === 404) {
    message.error('路径错误')
  }
  if (status === 500) {
    message.error('服务器错误')
  }
  if (status === 503) {
    message.error('服务器在维护')
  }
  return Promise.reject(err)
})

export default http