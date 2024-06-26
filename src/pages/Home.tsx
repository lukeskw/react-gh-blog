import { ChangeEvent, useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { ProfileSection } from '../components/ProfileSection'
import { useBlog } from '../hooks/useBlog'
import { CircleNotch } from '@phosphor-icons/react'
import { useDebounce } from '../hooks/useDebounce'

export function Homepage() {
  const { user, posts, searchIssue } = useBlog()

  const [searchInput, setSearchInput] = useState('')
  const debouncedSearch = useDebounce(searchInput, 500)

  const fetchPosts = async () => {
    try {
      searchIssue(debouncedSearch)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [debouncedSearch])

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)
  }
  return (
    <main className="mx-auto my-0 flex max-w-[864px] flex-col gap-8 p-2">
      {user && posts ? (
        <>
          <ProfileSection user={user} />
          <div className="mt-12 flex flex-col gap-2 px-2">
            <div className="flex  justify-between">
              <h1 className="text-lg font-bold">Posts</h1>
              <p className="text-sm text-slate-400 ">{`${posts.length} posts`}</p>
            </div>
            <input
              type="text"
              className="py- flex-1 rounded-md border border-slate-800 bg-slate-950 px-4 py-2 placeholder:text-zinc-800"
              placeholder="Search content"
              onChange={handleSearchInput}
              value={searchInput}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {posts?.map((post) => {
              return <Card key={post.number} post={post} />
            })}
          </div>
        </>
      ) : (
        <div className="mt-8 flex w-full justify-center">
          <CircleNotch size={24} className="animate-spin" />
        </div>
      )}
    </main>
  )
}
