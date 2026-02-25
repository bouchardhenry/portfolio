import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/images/home_portfolio.svg'

export default function Navbar() {
  const navLinkClass = ({ isActive }) => isActive ? styles.active : ''

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="Home button" />
      </NavLink>
      <ul className={styles.links}>
        <li><NavLink to="/digital-experience" className={navLinkClass}>digital experiences</NavLink></li>
        <li><NavLink to="/info" className={navLinkClass}>info</NavLink></li>
        <li><NavLink to="/contact" className={navLinkClass}>contact</NavLink></li>
      </ul>
    </nav>
  )
}
