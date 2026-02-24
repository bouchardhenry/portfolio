import styles from './About.module.css'
import labyrinth from '../../assets/images/labyrint rouge.svg'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>

      {/* Background labyrinth watermark */}
      <img src={labyrinth} alt="" className={styles.watermark} />

      {/* Hero headline */}
      <h1 className={styles.headline}>
        Fullstack Developper focused on design,<br />
        typography, systems, and clarity.
      </h1>

      {/* Body paragraphs */}
      <div className={styles.body}>
        <p>Web development can be thoughtful and human. Digital experiences take shape through design, code, and care.</p>
        <p>Grounded in business and shaped by design, my work naturally moved toward development. I build responsive online experiences through a balance of aesthetics and technical precision.</p>
        <p>Attention to quality, ongoing learning, gentle experimentation, and respect for users quietly guide the process.</p>
      </div>

      {/* Bottom info grid */}
      <div className={styles.grid}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Focus</h3>
          <p>Visual Identity</p>
          <p>Editorial Design</p>
          <p>Digital Experience</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Currently</h3>
          <p>Seeking internship opportunities in design studios</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Location</h3>
          <p>Stockholm, Sweden</p>
          <p>Paris, France</p>
        </div>
      </div>

    </div>
    </div>
  )
}