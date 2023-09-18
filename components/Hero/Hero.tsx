import Link from 'next/link'
import './Hero.scss'
import { socialsData } from '@/constants/data'
import { HiOutlineDownload, HiMail } from 'react-icons/hi'
import Image from 'next/image';
import { FaGithub, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
 
export default function Hero() {
    const {theme} =useTheme()
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
                    Web developer | Data Analyst
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
        <div className="right">
            <div className={`prof-pic ${theme}`}>
                <Image
                src="/assets/profile.png"
                alt='profile pic'
                width={450}
                height={627}
                className='pro-image'
                priority={true}
                title='Yasin Walum'
                 />
            </div>
            <div className="media">
                <div className="icon center">
                    <FaGithub />
                </div>
                <div className="icon center">
                    <FaReact />
                </div>
                <div className="icon center">
                    <FaJava />
                </div>
                <div className="icon center">
                    <FaJs />
                </div>
            </div>
        </div>
    </article>
  )
}
