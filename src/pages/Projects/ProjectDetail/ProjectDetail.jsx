import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlug, getAdjacentProject } from "../../../data/projects";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <Link to="/digital-experience">← Back to projects</Link>
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
          <Link to="/digital-experience" className={styles.back}>
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

        {/* ── Gallery ── */}
        {project.images.length > 0 && (
          <div className={styles.gallery}>
            <div className={styles.galleryTrack}>
              <img
                src={project.images[currentIndex]}
                alt={`${project.title} — ${currentIndex + 1}`}
              />
            </div>
            {project.images.length > 1 && (
              <div className={styles.galleryControls}>
                <button
                  className={styles.galleryBtn}
                  onClick={() =>
                    setCurrentIndex((i) =>
                      i === 0 ? project.images.length - 1 : i - 1
                    )
                  }
                  aria-label="Previous image"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className={styles.galleryCounter}>
                  {currentIndex + 1} / {project.images.length}
                </span>
                <button
                  className={styles.galleryBtn}
                  onClick={() =>
                    setCurrentIndex((i) =>
                      i === project.images.length - 1 ? 0 : i + 1
                    )
                  }
                  aria-label="Next image"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Body ── */}
        <div className={styles.body}>
          {/* Description + deliverables */}
          <div className={styles.intro}>
            <p className={styles.description}>
              {project.description}
            </p>
            <div className={styles.deliverables}>
              <p className={styles.sectionLabel}>Scope of work</p>
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
              <p className={styles.sectionLabel}>Challenge</p>
              <p className={styles.caseProse}>{project.challenge}</p>
            </div>
            <div className={styles.caseBlock}>
              <p className={styles.sectionLabel}>Solution</p>
              <p className={styles.caseProse}>{project.solution}</p>
            </div>
          </div>

        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaLink}>
            Get in touch →
          </Link>
        </div>
      </article>
    </div>
  );
}
