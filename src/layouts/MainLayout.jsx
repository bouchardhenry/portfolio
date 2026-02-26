import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  const { pathname } = useLocation()
  const staticFooter = pathname === '/info' || pathname.includes('/digital-experience/')

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer fixed={!staticFooter} />
    </>
  )
}