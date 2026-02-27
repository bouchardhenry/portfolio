import styles from './Contact.module.css'
import labyrinth from '../../assets/images/labyrint rouge.svg'

export default function Contact() {
  return (
    <div className={styles.container}>
    <div className={styles.page}>

      {/* Top left: email rotated */}
      <a href="mailto:bouchardhenry@gmail.com" className={`${styles.item} ${styles.email}`}>
        bouchardhenry@gmail.com
      </a>

      {/* Top right: phone rotated */}
      <a href="tel:+46703577657" className={`${styles.item} ${styles.phone}`}>
        + 46 (0)70 357 76 57
      </a>

      {/* Center: labyrinth */}
      <div className={styles.center}>
        <img src={labyrinth} alt="labyrinth" className={styles.labyrinth} />
      </div>

      {/* Bottom left: tagline rotated */}
      <p className={`${styles.item} ${styles.tagline}`}>
        NOT A FINGER<span style={{color: 'var(--color-accent)'}}>PRINT</span>
      </p>

      {/* Bottom right: social links rotated */}
      <div className={`${styles.item} ${styles.socials}`}>
        <a href="https://github.com/bouchardhenry" target="_blank" rel="noreferrer">Github <span className={styles.arrow}>&#x2197;</span></a>
        <a href="https://www.linkedin.com/in/henry-bouchard/" target="_blank" rel="noreferrer">LinkedIn <span className={styles.arrow}>&#x2197;</span></a>
      </div>

    </div>
    </div>
  )
}
