import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
