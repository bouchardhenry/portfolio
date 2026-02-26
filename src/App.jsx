import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import ProjectDetail from './pages/Projects/ProjectDetail/ProjectDetail'
import NotFound from './pages/NotFound/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="digital-experience/:slug" element={<ProjectDetail />} />
          <Route index element={<Home />} />
          <Route path="info" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="digital-experience" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}