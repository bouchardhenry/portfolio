import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import labyrinth from '../../assets/images/labyrint rouge.svg'

const projects = [
  {
    slug: 'madreema-foundation',
    title: 'MADREEMA FOUNDATION',
    date: 'October 2025',
    tags: 'Logo / Web Design',
    align: 'right',
  },
  {
    slug: 'halo-mind',
    title: 'HALO MIND',
    date: 'October 2025',
    tags: 'Web Design / Developpement',
    align: 'right',
  },
  {
    slug: 'svea-vaccin',
    title: 'SVEA VACCIN',
    date: 'February 2026',
    tags: 'Web Design / Developpement',
    align: 'right',
  },
  {
    slug: 'a-collective',
    title: 'A COLLECTIVE',
    date: 'April 2025',
    tags: 'Logo / Web Design / Developpement',
    align: 'right',
  },
  {
    slug: 'blg-entertainement',
    title: 'BLG ENTERTAINEMENT',
    date: 'October 2025',
    tags: 'Artistic Direction',
    align: 'right',
  },
]

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