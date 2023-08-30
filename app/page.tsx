"use client"
import { Hero } from '@/components'
import styles from './page.module.scss'
import { useTheme } from '@/components/contexts/ThemeContext'

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <main className={styles.main}>
        <section>
          <Hero />
        </section>
        <section>
          about
        </section>
        <section>
          portfolio
        </section>
        <section>
          testimonial
        </section>
      </main>
    </div>
  )
}
