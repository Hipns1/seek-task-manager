import { API_URL } from '@/lib/consts'
import axios from 'axios'

export const taskApi = axios.create({
    baseURL: API_URL
})

taskApi.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
)

taskApi.interceptors.request.use((config) => {
    return config
})