
import { Footer, NavBar } from '@/components'
import './globals.scss'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/contexts/ThemeContext'
import { Toaster } from 'react-hot-toast'
import robots from './robots';

export const metadata: Metadata = {
  metadataBase: new URL('https://ywalum.com'),
  title: "Yasin Walum | Web Developer Portfolio",
  description: "Yasin Walum - Web Developer Portfolio | Showcasing my creative projects and expertise in web development. Explore my work now!",
  keywords: "web development, react, scss, sass, web design, portfolio, projects, coding, programming, HTML, CSS, JavaScript, front-end, back-end, responsive design, web applications, software development, developer, coding skills, creative, UI/UX, technology, coding projects, programming languages, website development, software engineer, web solutions, digital portfolio, coding expertise",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  authors: {
    name: "Yasin Walum",
    url: "https://ywalum.com"
  } ,
  icons: {
    icon: "/icons/fav-128x153.png",
    apple: "/icons/fav-128x153.png",
  },
  openGraph: {
    title: "Yasin Walum | Web Developer Portfolio",
    description: "Discover my world of web development! 🚀 Check out Yasin Walum's portfolio showcasing creative projects and coding expertise. #WebDeveloper #Portfolio #CodingSkills",
    siteName: "Yasin Walum | Web Developer Portfolio",
    images: [
      {
        url: "/assets/blogMe.jpg",
        width: 1080,
        height:760,
        alt: "Yasin Walum",
      },
    ],
    locale: "en_us",
    url: "/",
    type: "website"
  },
  alternates: {
    canonical: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Walum | Web Developer Portfolio",
    description: "Discover my world of web development! 🚀 Check out Yasin Walum's portfolio showcasing creative projects and coding expertise. #WebDeveloper #Portfolio #CodingSkills",
    images: [
      {
        url: "/assets/blogMe.jpg",
        width: 1080,
        height:760,
        alt: "Yasin Walum",
      }
    ],
    site: "@YasinWalum",
    creator: "@YasinWalum",
  },
  manifest: '/manifest.json',
  category: 'web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
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
