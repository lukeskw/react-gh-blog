import {
  ArrowSquareOut,
  GithubLogo,
  Building,
  Users,
} from '@phosphor-icons/react'
import { GithubUser } from '../contexts/BlogContext'

interface IProfileSectionProps {
  user: GithubUser
}

export function ProfileSection({ user }: IProfileSectionProps) {
  return (
    <section className="relative -mt-24 flex items-center gap-4 rounded-xl bg-slate-900 p-8 shadow-md shadow-black">
      <div className="">
        <img
          src={user.avatar_url}
          alt="profile-pic"
          className="w-48 rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 px-4 py-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold tracking-wide">{user.name}</h1>
          <a
            href={user.html_url}
            className="flex items-center gap-1 font-bold text-blue-500"
          >
            Github
            <ArrowSquareOut className="" size={18} weight="bold" />
          </a>
        </div>
        <p className="text-xl leading-relaxed text-slate-400">{user.bio}</p>
        <div className="flex gap-8 text-slate-300">
          <div className="flex items-center gap-1 ">
            <GithubLogo
              size={20}
              className="rounded-full bg-slate-600 p-0.5 text-slate-900"
              weight="fill"
            />
            {user.login}
          </div>
          <div className="flex items-center gap-1">
            <Building size={20} weight="fill" className="text-slate-600" />
            {user.company}
          </div>
          <div className="flex items-center gap-1 ">
            <Users size={20} weight="fill" className="text-slate-600" />
            {`${user.followers} followers`}
          </div>
        </div>
      </div>
    </section>
  )
}
