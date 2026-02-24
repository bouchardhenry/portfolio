import styles from './ProjectDetail.module.css'
import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const { slug } = useParams()
  return (
    <div className={styles.container}>
      <h1>{slug}</h1>
    </div>
  )
}