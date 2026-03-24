import styles from './SinglePage.module.css'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'

export default function SinglePage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="digital-experience" className={styles.section}>
        <Projects />
      </section>
      <section id="info" className={styles.section}>
        <About />
      </section>
      <section id="contact" className={styles.section}>
        <Contact />
      </section>
    </>
  )
}
