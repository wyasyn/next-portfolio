"use client"
import { Banner, Feature, Hero, Testimonial } from '@/components'
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
        <section className='relative'>
          <Banner />
          <Feature />
        </section>
        <section>
          <Testimonial />
        </section>
      </main>
    </div>
  )
}
