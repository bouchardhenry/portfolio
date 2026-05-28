import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('colorTheme') || 'dark')
  const [mono, setMono] = useState(() => localStorage.getItem('mono') === 'true')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorTheme)
    localStorage.setItem('colorTheme', colorTheme)
  }, [colorTheme])

  useEffect(() => {
    if (mono) {
      document.documentElement.setAttribute('data-mono', '')
    } else {
      document.documentElement.removeAttribute('data-mono')
    }
    localStorage.setItem('mono', mono)
  }, [mono])

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme, mono, setMono }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
