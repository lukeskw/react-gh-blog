import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostHeaderSection } from '../components/PostHeaderSection'
import { useBlog } from '../hooks/useBlog'
import { Post as TPost } from '../contexts/BlogContext'

export function Post() {
  const { posts } = useBlog()
  const { postId } = useParams()

  const [post, setPost] = useState<TPost>()

  function getPost() {
    const post = posts?.find((p) => p.number === Number(postId))
    setPost(post)
  }

  useEffect(() => {
    if (posts) {
      getPost()
    }
  }, [posts])
  return (
    <main className="mx-auto my-0 flex max-w-[864px] flex-col gap-8 p-2">
      <PostHeaderSection post={post} />
      {post && <ReactMarkdown>{post.body}</ReactMarkdown>}
    </main>
  )
}
