import { ReactNode, useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
import { env } from '../env'

interface BlogContextType {
  blog: object
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState()
  const [blog, setBlog] = useState({})

  const navigate = useNavigate()

  async function fetchUser() {
    const response = await api.get(`users/${env.VITE_GITHUB_USERNAME}`)
    setUser(response.data)

    console.log(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <BlogContext.Provider
      value={{
        blog,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
