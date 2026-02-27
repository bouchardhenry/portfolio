import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../../../data/projects";
import styles from "./ProjectDetail.module.css";
import labyrinth from "../../../assets/images/labyrint rouge.svg";

const normalizeImage = (img) =>
  typeof img === "string" ? { src: img, type: "normal" } : img;

function GalleryImage({ src, alt, isTall }) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const style = !loaded
    ? { opacity: 0, transition: "none" }
    : isTall
    ? {
        opacity: 1,
        transform: hovered ? "translateY(-66.6%)" : "translateY(0)",
        transition: hovered
          ? "opacity 0.3s ease, transform 12s ease-in-out"
          : "opacity 0.3s ease, transform 6s ease-in-out",
      }
    : { opacity: 1, transition: "opacity 0.3s ease" };

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      onMouseEnter={isTall ? () => setHovered(true) : undefined}
      onMouseLeave={isTall ? () => setHovered(false) : undefined}
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
          <Link to="/digital-experience">← Back to projects</Link>
        </div>
      </div>
    );
  }

  const images = project.images.map(normalizeImage);
  const currentImage = images[currentIndex];
  const isTall = currentImage.type === "tall";
  const isFit = currentImage.type === "fit";

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
    <div className={styles.container}>
      <img src={labyrinth} alt="" className={styles.labyrinth} />
      <article className={styles.page}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <Link to="/digital-experience" className={styles.back}>
            ← Back
          </Link>
          <div className={styles.headerInner}>
            <div className={styles.headerMeta}>
              <span className={styles.date}>{project.date}</span>
            </div>
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
                  : styles.galleryTrack
              }
              onClick={() => setLightboxOpen(true)}
            >
              <GalleryImage
                key={currentIndex}
                src={currentImage.src}
                alt={`${project.title} — ${currentIndex + 1}`}
                isTall={isTall}
              />
              <span className={styles.galleryZoomHint}>Click to view</span>
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
          <Link to="/contact" className={styles.ctaLink}>
            Get in touch →
          </Link>
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
    </div>
  );
}
