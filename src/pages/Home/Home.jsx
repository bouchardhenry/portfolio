import { useEffect } from 'react'
import styles from './Home.module.css'
import labyrinth from '../../assets/images/labyrint.gif'
import nameSvg from '../../assets/images/HB_rightside.png'

export default function Home() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 1023
    if (isMobile) {
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.overscrollBehavior = ''
    }
  }, [])

  return (
    <div className={styles.page}>

      {/* Centered labyrinth */}
      <div className={styles.center}>
        <img src={labyrinth} alt="labyrinth" className={styles.labyrinth} />
      </div>

      {/* Right side name image */}
      <img src={nameSvg} alt="Henry Bouchard" className={styles.nameImage} />

    </div>
  )
}