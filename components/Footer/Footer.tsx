"use client"
import './Footer.scss'
import { useTheme } from '../contexts/ThemeContext'

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={`footer ${theme}`}>
        <div className="footer-container">
            Footer
        </div>
    </footer>
  )
}
