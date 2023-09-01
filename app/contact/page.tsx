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
          contact fom
        </section>
        <section>
          map
        </section>
      </main>
    </div>
  )
}
