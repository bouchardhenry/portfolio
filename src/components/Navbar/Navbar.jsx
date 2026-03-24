import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/images/home_portfolio.svg'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = ['home', 'digital-experience', 'info', 'contact']

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id)
          return
        }
      }

      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (id) => activeSection === id ? styles.active : ''

  return (
    <nav className={styles.navbar}>
      <Link to={{ pathname: '/', hash: '#home' }} className={styles.logo}>
        <img src={logo} alt="Home button" />
      </Link>
      <ul className={styles.links}>
        <li><Link to={{ pathname: '/', hash: '#digital-experience' }} className={linkClass('digital-experience')}>digital experience</Link></li>
        <li><Link to={{ pathname: '/', hash: '#info' }} className={linkClass('info')}>info</Link></li>
        <li><Link to={{ pathname: '/', hash: '#contact' }} className={linkClass('contact')}>contact</Link></li>
      </ul>
    </nav>
  )
}
