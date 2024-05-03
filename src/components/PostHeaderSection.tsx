import {
  ArrowSquareOut,
  GithubLogo,
  CaretLeft,
  ChatCircle,
  CalendarDots,
  CircleNotch,
} from '@phosphor-icons/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlog } from '../hooks/useBlog'
import { useEffect, useState } from 'react'
import { Post } from '../contexts/BlogContext'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export function PostHeaderSection() {
  const { posts } = useBlog()
  const navigate = useNavigate()
  const { postId } = useParams()

  const [post, setPost] = useState<Post>()

  function getPost() {
    const post = posts?.find((p) => p.number === Number(postId))
    setPost(post)
  }

  useEffect(() => {
    if (posts) {
      getPost()
    }
  }, [posts])

  return posts ? (
    <section className="relative -mt-24 flex items-center gap-4 rounded-xl bg-slate-900 p-8 shadow-md shadow-black">
      <div className="flex w-full flex-col justify-between gap-4 px-4 py-2">
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-bold text-blue-500"
          >
            <CaretLeft weight="bold" /> Back
          </button>
          <a
            href={post?.html_url}
            className="flex items-center gap-1 font-bold text-blue-500"
          >
            Check on Github
            <ArrowSquareOut className="" size={18} weight="bold" />
          </a>
        </div>
        <h1 className="text-2xl font-bold tracking-wide">{post?.title}</h1>
        <div className="flex gap-8 text-slate-300">
          <a href={post?.user.html_url} className="flex items-center gap-2 ">
            <GithubLogo
              size={20}
              className="rounded-full bg-slate-600 p-0.5 text-slate-900"
              weight="fill"
            />
            {post?.user.login}
          </a>
          <div className="flex items-center gap-1">
            <CalendarDots size={20} weight="fill" className="text-slate-600" />
            {dayjs().to(post?.created_at)}
          </div>
          <div className="flex items-center gap-1 ">
            <ChatCircle size={20} weight="fill" className="text-slate-600" />
            {`${post?.comments} comments`}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="mt-8 flex w-full justify-center">
      <CircleNotch size={24} className="animate-spin" />
    </div>
  )
}
