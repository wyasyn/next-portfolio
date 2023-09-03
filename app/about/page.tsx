"use client"
import { useTheme } from '@/components/contexts/ThemeContext';
import styles from '../page.module.scss'
import { PageTitle } from '@/components';
import { about } from '@/constants/data';


export default function About() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <main className={styles.main}>
        <div className="about">
          <PageTitle
          {...about}
          />
        </div>
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
