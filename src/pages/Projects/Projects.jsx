import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import { projects } from '../../data/projects'

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <div className={styles.page}>

      {/* Staggered list — each title fades up as the section enters the viewport */}
      <motion.ul
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {projects.map((project) => (
          <motion.li
            key={project.slug}
            variants={item}
            className={`${styles.item} ${project.align === 'right' ? styles.right : styles.left}`}
          >
            <Link to={`/digital-experience/${project.slug}`} className={styles.link}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.meta}>
                {project.date} / {project.tags.join(' · ')}
              </p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

    </div>
  )
}