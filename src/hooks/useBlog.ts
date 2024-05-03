import { useContext } from 'react'

import { BlogContext } from '@/src/contexts/BlogContext'

export function useBlog() {
  return useContext(BlogContext)
}
