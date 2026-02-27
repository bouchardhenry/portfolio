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
        Developer and designer, guided by aesthetics, visual identity, and long-term vision
      </h1>

      {/* Body paragraphs */}
      <div className={styles.body}>
        <p>Grounded in business and shaped by design, my work moved naturally toward development.
        I believe web development can very human and thoughful. My work takes shape at the intersection of design, code, and intention.
        Attention to quality, ongoing learning, gentle experimentation, and respect for users are quietly woven into the work.</p>
      </div>

      {/* Skills */}
      <div className={styles.skills}>
        <h3 className={styles.columnTitle}>Skills</h3>
        <div className={styles.skillRow}>
          <span className={styles.skillLabel}>Development</span>
          <p>HTML / CSS · JavaScript · React · Tailwind · Node.js · REST APIs · SQL · PostgreSQL · WordPress · Git · Docker</p>
        </div>
        <div className={styles.skillRow}>
          <span className={styles.skillLabel}>Design</span>
          <p>UX Design & Prototyping · Web Design · Responsive Design · Figma · Adobe Suite · 3D Design</p>
        </div>
        <div className={styles.skillRow}>
          <span className={styles.skillLabel}>Business</span>
          <p>Financial Analysis · Business Strategy · Agile Methodology</p>
        </div>
        <div className={styles.skillRow}>
          <span className={styles.skillLabel}>Learning</span>
          <p className={styles.skillLearning}>TypeScript · Next.js · Three.js · Prisma · Python · CMS</p>
        </div>
      </div>

      {/* Bottom info grid */}
      <div className={styles.grid}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Focus</h3>
          <p>Brand Identity</p>
          <p>Web Design & Development</p>
          <p>Art Direction</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Currently</h3>
          <p>Available for internship 2026/11/09 - 2027/04/23</p>
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
