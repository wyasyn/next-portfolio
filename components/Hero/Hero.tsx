import Link from 'next/link'
import './Hero.scss'

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
                    Yasin Walum &nbsp;
                </strong>
                <p className='title'>
                    front-end developer
                </p>
            </h1>
            <div className="cta flex">
                <Link href="/contact" className="btn btn-secondary">hire me</Link>
                <a href='/assets/resume.pdf' className="btn" download='resume' >download cv </a>
            </div>
        </div>
    </article>
  )
}
