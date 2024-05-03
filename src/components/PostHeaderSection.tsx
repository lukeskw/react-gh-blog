import {
  ArrowSquareOut,
  GithubLogo,
  CaretLeft,
  ChatCircle,
  CalendarDots,
} from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export function PostHeaderSection() {
  const navigate = useNavigate()

  return (
    <section className="relative -mt-24 flex items-center gap-4 rounded-xl bg-slate-900 p-8 shadow-md shadow-black">
      <div className="flex w-full flex-col justify-between gap-4 px-4 py-2">
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-bold text-blue-500"
          >
            <CaretLeft weight="bold" /> Back
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-bold text-blue-500"
          >
            Check on Github
            <ArrowSquareOut className="" size={18} weight="bold" />
          </button>
        </div>
        <h1 className="text-2xl font-bold tracking-wide">
          JavaScript data types and data structures
        </h1>
        <div className="flex gap-8 text-slate-300">
          <button className="flex items-center gap-2 ">
            <GithubLogo
              size={20}
              className="rounded-full bg-slate-600 p-0.5 text-slate-900"
              weight="fill"
            />
            lukeskw
          </button>
          <button className="flex items-center gap-1">
            <CalendarDots size={20} weight="fill" className="text-slate-600" />1
            day ago
          </button>
          <button className="flex items-center gap-1 ">
            <ChatCircle size={20} weight="fill" className="text-slate-600" />5
            comments
          </button>
        </div>
      </div>
    </section>
  )
}
