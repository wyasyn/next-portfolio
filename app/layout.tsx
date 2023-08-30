
import { Footer, NavBar } from '@/components'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Yasin Walum | Web Developer Portfolio",
  description: "Yasin Walum - Web Developer Portfolio | Showcasing my creative projects and expertise in web development. Explore my work now!",
  keywords: "web development, react, scss, sass, web design, portfolio, projects, coding, programming, HTML, CSS, JavaScript, front-end, back-end, responsive design, web applications, software development, developer, coding skills, creative, UI/UX, technology, coding projects, programming languages, website development, software engineer, web solutions, digital portfolio, coding expertise",
  robots: "index, follow",
  authors: {
    name: "Yasin Walum",
    url: "https//ywalum.com"
  } ,
  icons: {
    icon: "/assets/logoshade.svg",
    apple: "/assets/favicon.jpg",
  },
  openGraph: {
    title: "Yasin Walum | Web Developer Portfolio",
    description: "Discover my world of web development! 🚀 Check out Yasin Walum's portfolio showcasing creative projects and coding expertise. #WebDeveloper #Portfolio #CodingSkills",
    siteName: "Yasin Walum | Web Developer Portfolio",
    images: [
      {
        url: "/assets/blogMe.jpg",
        width: 183,
        height:204,
        alt: "Yasin Walum",
      }
    ],
    url: "https://ywalum.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Walum | Web Developer Portfolio",
    description: "Discover my world of web development! 🚀 Check out Yasin Walum's portfolio showcasing creative projects and coding expertise. #WebDeveloper #Portfolio #CodingSkills",
    images: [
      {
        url: "/assets/blogMe.jpg",
        width: 183,
        height:204,
        alt: "Yasin Walum",
      }
    ],
    site: "https://ywalum.com",
    creator: "@wyasyn",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <header>
              <NavBar />
              </header>
              {children}
              <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
