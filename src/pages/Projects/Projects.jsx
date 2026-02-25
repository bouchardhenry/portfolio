import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import labyrinth from '../../assets/images/labyrint rouge.svg'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <div className={styles.page}>

      <img src={labyrinth} alt="" className={styles.labyrinth} />

      <ul className={styles.list}>
        {projects.map((project) => (
          <li
            key={project.slug}
            className={`${styles.item} ${project.align === 'right' ? styles.right : styles.left}`}
          >
            <Link to={`/projects/${project.slug}`} className={styles.link}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.meta}>{project.date} / {project.tags}</p>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}