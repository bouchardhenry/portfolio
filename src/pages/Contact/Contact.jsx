import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './Contact.module.css'
import labyrinth from '../../assets/images/thin labyrinth (1).svg'

export default function Contact() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.page}>

        <a href="mailto:bouchardhenry@gmail.com" className={`${styles.item} ${styles.email}`}>
          bouchardhenry@gmail.com
        </a>

        <a href="tel:+46703577657" className={`${styles.item} ${styles.phone}`}>
          + 46 (0)70 357 76 57
        </a>

        <div
          className={styles.center}
          onMouseEnter={() => setRevealed(true)}
        >
          <img src={labyrinth} alt="labyrinth" className={styles.labyrinth} />
        </div>

        <p className={`${styles.item} ${styles.tagline}`}>
          NOT A FINGERPRINT
        </p>

        <div className={`${styles.item} ${styles.socials}`}>
          <a href="https://github.com/bouchardhenry" target="_blank" rel="noreferrer">Github <span className={styles.arrow}>&#x2197;</span></a>
          <a href="https://www.linkedin.com/in/henry-bouchard/" target="_blank" rel="noreferrer">LinkedIn <span className={styles.arrow}>&#x2197;</span></a>
        </div>

      </div>

      {/* Circle-expand dark reveal */}
      <div
        className={`${styles.reveal} ${revealed ? styles.revealActive : ''}`}
        onMouseLeave={() => setRevealed(false)}
      >
        <AnimatePresence>
          {revealed && (
            <>
              <motion.a
                href="mailto:bouchardhenry@gmail.com"
                className={`${styles.ri} ${styles.rEmail}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                bouchardhenry@gmail.com
              </motion.a>

              <motion.a
                href="tel:+46703577657"
                className={`${styles.ri} ${styles.rPhone}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                +46 (0)70 357 76 57
              </motion.a>

              <motion.div
                className={styles.rCenter}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <img src={labyrinth} alt="" className={`${styles.labyrinth} ${styles.labyrinthInvert}`} />
              </motion.div>

              <motion.p
                className={`${styles.ri} ${styles.rTagline}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                NOT A FINGERPRINT
              </motion.p>

              <motion.div
                className={`${styles.ri} ${styles.rSocials}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a href="https://github.com/bouchardhenry" target="_blank" rel="noreferrer">
                  Github <span className={styles.arrow}>&#x2197;</span>
                </a>
                <a href="https://www.linkedin.com/in/henry-bouchard/" target="_blank" rel="noreferrer">
                  LinkedIn <span className={styles.arrow}>&#x2197;</span>
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
