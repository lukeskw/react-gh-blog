import axios from 'axios'
import { env } from '../env'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: env.VITE_GITHUB_PAT ? `Bearer ${env.VITE_GITHUB_PAT}` : '',
  },
})
