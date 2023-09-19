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
            <h3>Web Developer | Data Analyst</h3>
            <p>
            👋 Hello! I'm, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake.
            </p>
            <a href="/assets/resume.pdf" className="btn btn-primary" download='resume' >Download CV <HiOutlineDownload /></a>
          </motion.div>
        </div>
      </article>
  )
}

export default About

