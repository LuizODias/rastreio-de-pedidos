import axios from 'axios'
import { defaultsDeep } from 'lodash'
import { configs } from '../configs/configs'

const username = ''
const password = ''

const getConfig = () => ({
  baseURL: configs.baseUrl,
  headers: {
    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    tenantId: '04,04',
  },
})

const api = axios.create()

api.interceptors.response.use(response => response.data)
api.interceptors.request.use(config => {
  const mergedConfig = defaultsDeep(config, getConfig())
  return mergedConfig
})

export default api
