import styles from './Footer.module.css'

export default function Footer({ fixed = true }) {
  return (
    <footer className={fixed ? styles.footer : styles.footerStatic}>
      <p>Available for an internship from November 9, 2026 to May 29, 2027.</p>
    </footer>
  )
}
