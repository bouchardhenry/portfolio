import { motion } from 'motion/react'
import styles from './Home.module.css'
import labyrinth from '../../assets/images/labyrint.gif'
import nameSvg from '../../assets/images/HB_rightside.png'

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Centered labyrinth — fades + scales in on mount */}
      <motion.div
        className={styles.center}
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img src={labyrinth} alt="labyrinth" className={styles.labyrinth} />
      </motion.div>

      {/* Name image — slides in from the right */}
      <motion.img
        src={nameSvg}
        alt="Henry Bouchard"
        className={styles.nameImage}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
      />

    </div>
  )
}
