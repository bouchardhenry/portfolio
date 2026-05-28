import { motion } from 'motion/react'
import styles from './Home.module.css'
import labyrinthlogo from '../../assets/images/labyrinthlogo.svg'
import nameSvg from '../../assets/images/HB_rightside.png'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.center}>
      <img src={labyrinthlogo} alt="" className={styles.labyrinth}/>
      </div>

      <motion.img
        src={nameSvg}
        alt="Henry Bouchard"
        className={styles.nameImage}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
      />

      <ThemeToggle />
    </div>
  )
}
