import { motion } from 'motion/react'
import styles from './Home.module.css'
import labyrinth from '../../assets/images/thin labyrinth (1).svg'
import nameSvg from '../../assets/images/HB_rightside.png'

export default function Home() {
  return (
    <div className={styles.page}>

      <motion.div
        className={styles.center}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={labyrinth}
          alt="labyrinth"
          className={styles.labyrinth}
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        />
      </motion.div>

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
