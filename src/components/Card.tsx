import { Post } from '../contexts/BlogContext'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useBlog } from '../hooks/useBlog'
dayjs.extend(relativeTime)
interface ICardProps {
  post: Post
}

export function Card({ post }: ICardProps) {
  const { redirectToPost } = useBlog()
  return (
    <button
      onClick={() => redirectToPost(post.number)}
      className="flex flex-col gap-4 rounded-xl bg-slate-850 p-10 hover:bg-slate-800"
    >
      <div className="flex items-start justify-between gap-8">
        <h1 className="text-xl">{post.title}</h1>
        <span className="w-28 text-right text-sm text-slate-400">
          {dayjs().to(post.created_at)}
        </span>
      </div>
      <p className="line-clamp-4 leading-relaxed text-slate-400">{post.body}</p>
    </button>
  )
}
