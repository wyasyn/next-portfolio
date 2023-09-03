import { FeaturedProjects } from '@/constants/data'
import { HeadingSection, ProjectCard } from '..'
import './Feature.scss'
import Link from 'next/link'

export default function Feature() {
  return (
    <div className="feature container">
        <HeadingSection
          title='Featured Projects'
         />
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
