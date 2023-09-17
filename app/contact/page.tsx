"use client"
import { useTheme } from '@/components/contexts/ThemeContext';
import styles from '../page.module.scss'
import { Contact, Map, PageTitle } from '@/components';
import { contactData } from '@/constants/data';

export default function ContactPage() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <main className={styles.main}>
        <div className="contact-page">
          <PageTitle
          {...contactData}
          />
        </div>
        <section>
          <Contact />
        </section>
        <section>
          <Map />
        </section>
      </main>
    </div>
  )
}
