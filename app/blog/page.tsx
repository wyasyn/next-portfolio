"use client"
import { useTheme } from '@/components/contexts/ThemeContext';
import styles from '../page.module.scss'
import { Blog, PageTitle } from '@/components';
import { blog } from '@/constants/data';

export default function BlogPage() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <main className={styles.main}>
        <div className="blog-page">
          <PageTitle
          {...blog}
          />
        </div>
        <section>
          <Blog />
        </section>
      </main>
    </div>
  )
}
