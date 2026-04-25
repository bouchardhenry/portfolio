import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { getProjectBySlug } from "../../../data/projects";
import styles from "./ProjectDetail.module.css";
import labyrinth from "../../../assets/images/thin labyrinth (1).svg";

const normalizeImage = (img) =>
  typeof img === "string" ? { src: img, type: "normal" } : img;

function GalleryImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  const style = !loaded
    ? { opacity: 0, transition: "none" }
    : { opacity: 1, transition: "opacity 0.3s ease" };

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      style={style}
    />
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <a href="/#digital-experience">← Back to projects</a>
        </div>
      </div>
    );
  }

  const images = project.images.map(normalizeImage);
  const currentImage = images[currentIndex];
  const isTall = currentImage.type === "tall";
  const isFit = currentImage.type === "fit";
  const isTop = currentImage.type === "top";

  const prevImage = () => setCurrentIndex(i => i === 0 ? images.length - 1 : i - 1);
  const nextImage = () => setCurrentIndex(i => i === images.length - 1 ? 0 : i + 1);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")  prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape")     setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, currentIndex]);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <a href="/#contact" className={styles.labyrinthLink}>
        <img src={labyrinth} alt="" className={styles.labyrinth} />
        <p className={styles.labyrinthText}>Get in touch</p>
      </a>
      <article className={styles.page}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <nav className={styles.breadcrumb}>
            <a href="/#digital-experience" className={styles.breadcrumbLink}>Digital Experiences</a>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{project.slug}</span>
          </nav>
          <div className={styles.headerInner}>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </header>

        {/* ── Gallery ── */}
        {images.length > 0 && (
          <div className={styles.gallery}>
            <div
              className={
                isTall
                  ? styles.galleryTrackTall
                  : isFit
                  ? styles.galleryTrackFit
                  : isTop
                  ? styles.galleryTrackTop
                  : styles.galleryTrack
              }
              onClick={() => setLightboxOpen(true)}
            >
              <GalleryImage
                key={currentIndex}
                src={currentImage.src}
                alt={`${project.title} — ${currentIndex + 1}`}
              />
              <button
                className={styles.galleryZoomHint}
                onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                aria-label="View fullscreen"
              >
                Expand image
              </button>
            </div>
            {images.length > 1 && (
              <div className={styles.galleryControls}>
                <button
                  className={styles.galleryBtn}
                  onClick={() =>
                    setCurrentIndex((i) =>
                      i === 0 ? images.length - 1 : i - 1
                    )
                  }
                  aria-label="Previous image"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className={styles.galleryCounter}>
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  className={styles.galleryBtn}
                  onClick={() =>
                    setCurrentIndex((i) =>
                      i === images.length - 1 ? 0 : i + 1
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
          <p className={styles.dateValue}>{project.date}</p>
          <div className={styles.intro}>
            <div>
              <p className={styles.description}>
                {project.description}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.siteLink}
                >
                  {project.urlLabel || project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/[/#?].*$/, "")}
                </a>
              )}
            </div>
            <div className={styles.deliverables}>
              <p className={styles.sectionLabel}>Scope of work</p>
              <ul className={styles.deliverablesList}>
                {project.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

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
          <a href="/#digital-experience" className={styles.ctaLink}>
            &#8617; Digital Experience
          </a>
        </div>
      </article>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className={styles.lightboxInner}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={`${project.title} — full`}
              className={styles.lightboxImg}
            />
          </div>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          {images.length > 1 && (
            <>
              <button
                className={styles.lightboxPrev}
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                className={styles.lightboxNext}
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}