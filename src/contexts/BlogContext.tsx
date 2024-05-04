import { ReactNode, useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
import { env } from '../env'
import { AxiosResponse } from 'axios'

export type GithubUser = {
  avatar_url: string
  bio?: string
  company?: string
  login: string
  name: string
  followers?: string
  html_url: string
  id: number
}

export type Post = {
  number: number
  title: string
  body: string
  comments: number
  html_url: string
  created_at: string
  updated_at: string
  user: GithubUser
}

type TIssuesResponse = {
  totalCount: number
  items: Post[]
}

interface BlogContextType {
  user: GithubUser | undefined
  posts: Post[] | undefined
  redirectToPost: (postId: number) => void
  searchIssue: (q: string) => void
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<GithubUser | undefined>()
  const [posts, setPosts] = useState<Post[] | undefined>()

  const navigate = useNavigate()

  async function fetchUser() {
    try {
      const response: AxiosResponse<GithubUser> = await api.get(
        `users/${env.VITE_GITHUB_USERNAME}`,
      )
      const {
        avatar_url: avatarURL,
        bio,
        company,
        login,
        name,
        followers,
        html_url: htmlURL,
        id,
      } = response.data
      const userData: GithubUser = {
        avatar_url: avatarURL,
        bio,
        company,
        login,
        name,
        followers,
        html_url: htmlURL,
        id,
      }

      setUser(userData)
    } catch (err) {
      console.error(
        "An error ocurred while fetching user github's account: ",
        err,
      )
      navigate('/')
    }
  }
  async function fetchPosts(q: string = '') {
    try {
      const response: AxiosResponse<TIssuesResponse> = await api.get(
        `search/issues?q=${q}%20repo:${env.VITE_GITHUB_REPOSITORY}`,
      )

      const { items } = response.data
      setPosts(items)
    } catch (err) {
      console.error(
        "An error ocurred while fetching user github's account: ",
        err,
      )
      navigate('/')
    }
  }

  function redirectToPost(postId: number) {
    navigate(`/posts/${postId}`)
  }
  function searchIssue(q: string) {
    fetchPosts(q)
  }

  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, [])
  return (
    <BlogContext.Provider
      value={{
        posts,
        user,
        redirectToPost,
        searchIssue,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
