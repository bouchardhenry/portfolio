import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import SinglePage from './pages/SinglePage/SinglePage'
import ProjectDetail from './pages/Projects/ProjectDetail/ProjectDetail'
import NotFound from './pages/NotFound/NotFound'

function HashScroll() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash, pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<SinglePage />} />
          <Route path="digital-experience/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}