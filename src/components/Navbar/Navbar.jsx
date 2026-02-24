import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const navLinkClass = ({ isActive }) => isActive ? styles.active : ''

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        home
      </NavLink>
      <ul className={styles.links}>
        <li><NavLink to="/about" className={navLinkClass}>info</NavLink></li>
        <li><NavLink to="/projects" className={navLinkClass}>digital experiences</NavLink></li>
        <li><NavLink to="/contact" className={navLinkClass}>contact</NavLink></li>
      </ul>
    </nav>
  )
}
