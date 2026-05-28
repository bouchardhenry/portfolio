import { useTheme } from '../../context/ThemeContext'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { colorTheme, setColorTheme, mono, setMono } = useTheme()

  return (
    <div className={styles.strip}>
      <button
        className={`${styles.option} ${mono ? styles.active : ''}`}
        onClick={() => setMono(prev => !prev)}
      >
        {mono ? '■' : '□'} MONOSPACED
      </button>
      <button
        className={`${styles.option} ${colorTheme === 'dark' ? styles.active : ''}`}
        onClick={() => setColorTheme('dark')}
      >
        {colorTheme === 'dark' ? '■' : '□'} DARK
      </button>
      <button
        className={`${styles.option} ${colorTheme === 'light' ? styles.active : ''}`}
        onClick={() => setColorTheme('light')}
      >
        {colorTheme === 'light' ? '■' : '□'} LIGHT
      </button>
    </div>
  )
}
