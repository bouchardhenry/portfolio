import { motion } from 'motion/react'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: delay } },
})

export default function About() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.page}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger()}
      >

        {/* Hero headline — first element in */}
        <motion.h1 className={styles.headline} variants={fadeUp}>
          Developer and designer, guided by aesthetics, visual identity, and long-term vision
        </motion.h1>

        {/* Body */}
        <motion.div className={styles.body} variants={fadeUp}>
          <p>Grounded in business and shaped by design, my work moved naturally toward development.
          I believe web development can be very human and thoughful. My work takes shape at the intersection of design, code, and intention.
          Attention to quality, ongoing learning, gentle experimentation, and respect for users are quietly woven into the work.</p>
        </motion.div>

        {/* Skills — each row staggers in */}
        <motion.div className={styles.skills} variants={stagger(0.05)}>
          <motion.h3 className={styles.columnTitle} variants={fadeUp}>Skills</motion.h3>
          {[
            { label: 'Development', text: 'HTML / CSS · JavaScript · React · Tailwind · Node.js · REST APIs · SQL · PostgreSQL · WordPress · Git · Docker' },
            { label: 'Design',      text: 'UX Design & Prototyping · Web Design · Responsive Design · Figma · Adobe Suite · 3D Design' },
            { label: 'Business',    text: 'Financial Analysis · Business Strategy · Agile Methodology' },
            { label: 'Learning',    text: 'TypeScript · Next.js · Three.js · Prisma · Python · CMS', muted: true },
          ].map(({ label, text, muted }) => (
            <motion.div key={label} className={styles.skillRow} variants={fadeUp}>
              <span className={styles.skillLabel}>{label}</span>
              <p className={muted ? styles.skillLearning : undefined}>{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Info grid — columns stagger in */}
        <motion.div className={styles.grid} variants={stagger(0.1)}>
          {[
            { title: 'Focus',     lines: ['Brand Identity', 'Web Design & Development', 'Art Direction'] },
            { title: 'Currently', lines: ['Available for internship 2026/11/09 - 2027/04/23'] },
            { title: 'Location',  lines: ['Stockholm, Sweden', 'Paris, France'] },
          ].map(({ title, lines }) => (
            <motion.div key={title} className={styles.column} variants={fadeUp}>
              <h3 className={styles.columnTitle}>{title}</h3>
              {lines.map(l => <p key={l}>{l}</p>)}
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  )
}
