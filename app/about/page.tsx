"use client"
import { useTheme } from '@/components/contexts/ThemeContext';
import styles from '../page.module.scss'

export default function page() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <main className={styles.main}>
        <section>
          intro
        </section>
        <section>
          skills
        </section>
        <section>
          services
        </section>
        <section>
          education
        </section>
    </main>
    </div>
  )
}
