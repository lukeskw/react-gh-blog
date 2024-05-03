import {
  ArrowSquareOut,
  GithubLogo,
  Building,
  Users,
} from '@phosphor-icons/react'

export function ProfileSection() {
  return (
    <section className="relative -mt-24 flex items-center gap-4 rounded-xl bg-slate-900 p-8 shadow-md shadow-black">
      <div className="">
        <img
          src="https://github.com/lukeskw.png"
          alt="profile-pic"
          className="w-48 rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 px-4 py-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Lukeskw</h1>
          <a
            href="https://github.com/"
            className="flex items-center gap-1 font-bold text-blue-500"
          >
            Github
            <ArrowSquareOut className="" size={18} weight="bold" />
          </a>
        </div>
        <p className="text-xl leading-relaxed text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          labore, similique expedita architecto amet vero nobis
        </p>
        <div className="flex gap-8 text-slate-300">
          <button className="flex items-center gap-1 ">
            <GithubLogo
              size={20}
              className="rounded-full bg-slate-600 p-0.5 text-slate-900"
              weight="fill"
            />
            lukeskw
          </button>
          <button className="flex items-center gap-1">
            <Building size={20} weight="fill" className="text-slate-600" />
            CityConnect
          </button>
          <button className="flex items-center gap-1 ">
            <Users size={20} weight="fill" className="text-slate-600" />
            32 followers
          </button>
        </div>
      </div>
    </section>
  )
}
