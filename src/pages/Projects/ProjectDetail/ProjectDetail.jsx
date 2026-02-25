import { useParams, Link } from "react-router-dom";
import { getProjectBySlug, getAdjacentProject } from "../../../data/projects";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <Link to="/projects">← Back to projects</Link>
        </div>
      </div>
    );
  }

  const next = getAdjacentProject(slug);

  return (
    <div className={styles.container}>
      <article className={styles.page}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <Link to="/projects" className={styles.back}>
            &#x21a9; Back
          </Link>
          <div className={styles.headerInner}>
            <div className={styles.headerMeta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.date}>{project.date}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </header>

        {/* ── Hero image ── */}
        <div className={styles.heroImage}>
          <img src={project.images[0]} alt={project.title} />
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>
          {/* Description + deliverables */}
          <div className={styles.intro}>
            <p className={styles.description}>
              {project.description}
            </p>
            <div className={styles.deliverables}>
              <p className={styles.deliverablesLabel}>Scope of work</p>
              <ul className={styles.deliverablesList}>
                {project.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className={styles.rule} />

          {/* Challenge / Solution */}
          <div className={styles.caseStudy}>
            <div className={styles.caseBlock}>
              <p className={styles.caseLabel}>The challenge</p>
              <p className={styles.caseProse}>{project.challenge}</p>
            </div>
            <div className={styles.caseBlock}>
              <p className={styles.caseLabel}>The solution</p>
              <p className={styles.caseProse}>{project.solution}</p>
            </div>
          </div>

          {/* Second image */}
          {project.images[1] && (
            <div className={styles.secondImage}>
              <img src={project.images[1]} alt={`${project.title} — detail`} />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
