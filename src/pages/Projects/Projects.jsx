import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import labyrinth from '../../assets/images/labyrint rouge.svg'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <div className={styles.page}>

      <Link to="/contact" className={styles.labyrinthLink}>
        <img src={labyrinth} alt="" className={styles.labyrinth} />
        <p className={styles.labyrinthText}>Get in touch</p>
      </Link>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li
            key={project.slug}
            className={`${styles.item} ${project.align === 'right' ? styles.right : styles.left}`}
          >
            <Link to={`/digital-experience/${project.slug}`} className={styles.link}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.meta}>{project.date} / {project.tags}</p>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}