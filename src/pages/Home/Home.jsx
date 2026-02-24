import styles from './Home.module.css'
import labyrinth from '../../assets/images/labyrint.gif'

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Centered labyrinth */}
      <div className={styles.center}>
        <img src={labyrinth} alt="labyrinth" className={styles.labyrinth} />
      </div>

      {/* Right side vertical name */}
      <div className={styles.nameColumn}>
        <div className={styles.firstName}>
          {'HENRY'.split('').map((letter, i) => (
            <span key={i} className={styles.letter}>{letter}</span>
          ))}
        </div>
        <div className={styles.lastName}>
          {'BOUCHARD'.split('').map((letter, i) => (
            <span key={i} className={styles.letterMuted}>{letter}</span>
          ))}
        </div>
      </div>

    </div>
  )
}