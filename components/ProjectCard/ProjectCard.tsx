import Image from 'next/image'
import './ProjectCard.scss'
import { FaGithub } from 'react-icons/fa'

type Card = {
    image: string
    title: string
    link: string
    project: string
}

function ProjectCard(props: Card) {
    const {image, title, link, project} = props
  return (
    <article className="project">
        <div className="image relative">
            <Image
                src={image}
                alt='image'
                width={1024}
                height={720}
                className='img'
             />
            <p className="icon absolute">{project}</p>
        </div>
        <div className="content">
            <p className="title">
                {title}
            </p>
            <div className="link center">
                <a href={link} className="btn btn-primary" target='_blank' rel='noreferrer'>View</a>
            </div>
        </div>
    </article>
  )
}

export default ProjectCard