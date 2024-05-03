import { Card } from '../components/Card'
import { ProfileSection } from '../components/ProfileSection'

export function Homepage() {
  return (
    <main className="mx-auto my-0 flex max-w-[864px] flex-col gap-8 p-2">
      <ProfileSection />
      <div className="mt-12 flex flex-col gap-2 px-2">
        <div className="flex  justify-between">
          <h1 className="text-lg font-bold">Posts</h1>
          <p className="text-sm text-slate-400 ">6 posts</p>
        </div>
        <input
          type="text"
          className="py- flex-1 rounded-md border border-slate-800 bg-slate-950 px-4 py-2 placeholder:text-zinc-800"
          placeholder="Search content"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {Array(6)
          .fill(null)
          .map((_, i) => {
            return <Card key={i} />
          })}
      </div>
    </main>
  )
}
