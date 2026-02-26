import styles from './Home.module.css'
import labyrinth from '../../assets/images/labyrint.gif'
import nameSvg from '../../assets/images/HB_rightside.png'

export default function Home() {
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