import { ProjectsData } from '@/constants/data'
import { HeadingSection, ProjectCard } from '..'
import './Projects.scss'

export default function Projects() {
  return (
    <div className="projects-container container">
    <HeadingSection
      title='Projects'
    />
    <article className="projects-main">
        {
            ProjectsData.map((data, index) => (
            <ProjectCard
                key={index}
                {...data}
            />
            ))
        }
    </article>
</div>
  )
}
