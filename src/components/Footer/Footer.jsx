import styles from './Footer.module.css'

export default function Footer({ fixed = true }) {
  return (
    <footer className={fixed ? styles.footer : styles.footerStatic}>
      <p>Available for an internship from 2026-09-11 to 2027-05-29.</p>
    </footer>
  )
}
