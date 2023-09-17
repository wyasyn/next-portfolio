"use client"
import { useTheme } from '@/components/contexts/ThemeContext';
import styles from '../page.module.scss'
import { PageTitle, Services, Skills, AboutSec, AboutPics } from '@/components';
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
          <AboutSec />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <AboutPics />
        </section>
    </main>
    </div>
  )
}
