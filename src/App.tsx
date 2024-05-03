import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogProvider } from './contexts/BlogContext'

export function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <Router />
      </BlogProvider>
    </BrowserRouter>
  )
}

export default App
