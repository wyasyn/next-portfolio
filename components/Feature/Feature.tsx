import { FeaturedProjects } from '@/constants/data'
import { ProjectCard } from '..'
import './Feature.scss'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Feature() {
  return (
    <div className="feature container">
        <h2>Featured Projects</h2>
        <article className="projects">
          {
            FeaturedProjects.map((data, index) => (
              <ProjectCard
                key={index}
                {...data}
               />
            ))
          }
        </article>
        <div className="cta center">
          <Link href="/portfolio" className='btn btn-secondary'>SEE MORE</Link>
        </div>
    </div>
  )
}
