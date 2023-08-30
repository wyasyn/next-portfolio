import Link from 'next/link'
import './Hero.scss'
import { socialsData } from '@/constants/data'
import { HiOutlineDownload, HiMail } from 'react-icons/hi'

export default function Hero() {
  return (
    <article className='hero-container container flex'>
        <div className="left">
            <h1 className='hero-heading'>
                <p className='hello'>
                    Hello, I&apos;m
                </p>
                <strong
                    className='heading-name'
                    >
                    Yasin Walum
                </strong>
                <p className='title'>
                    front-end developer
                </p>
            </h1>
            <div className="cta flex">
                <Link href="/contact" className="btn btn-secondary">hire me <HiMail /></Link>
                <a href='/assets/resume.pdf' className="btn" download='resume' >download cv <HiOutlineDownload /></a>
            </div>
            <div className="socials flex">
                {
                    socialsData.map((data, index) => (
                        <a href={data.url} className='social-icon center' key={index}>
                            {data.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    </article>
  )
}
