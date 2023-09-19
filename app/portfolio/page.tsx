"use client"
import { useTheme } from '@/components/contexts/ThemeContext';
import styles from '../page.module.scss'
import { PageTitle, Projects } from '@/components';
import { portfolio } from '@/constants/data';

export default function PortfolioPage() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <main className={styles.main}>
        <div className="portfolio-page">
          <PageTitle
          {...portfolio}
          />
        </div>
        <section>
         <Projects />
        </section>
    </main>
    </div>
  )
}
