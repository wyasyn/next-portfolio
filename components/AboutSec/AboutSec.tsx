"use client"
import './About.scss'
import { HiOutlineDownload } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Image from 'next/image'

function About() {
  return (
      <article className="about-container container">
        <div className="about-content">
          <motion.div 
            whileInView={{ x:[-50,0] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          className="col-1">
            <div className="pic">
              <Image
                src='/assets/about2.png'
                alt='Yasin Walum'
                width={360}
                height={467}
                priority={true}
                title='Yasin Walum'
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x:[50,0] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
           className="col-2">
            <strong>Yasin Walum</strong>
            <h3>Front-End Developer</h3>
            <p>
              As a dedicated web developer, I strive to merge design aesthetics with functionality, crafting engaging and user-friendly websites. Whether you&apos;re seeking an expert in front-end development, back-end programming, or both, I am confident that my diverse skill set and innovative approach will captivate your interest. Join me on this journey as we explore the exciting world of web development together.
            </p>
            <a href="/assets/resume.pdf" className="btn btn-primary" download='resume' >Download CV <HiOutlineDownload /></a>
          </motion.div>
        </div>
      </article>
  )
}

export default About


