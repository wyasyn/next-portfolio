import Image from 'next/image'
import './ProjectCard.scss'

type Card = {
    image: string
    title: string
    link: string
    blur: string
    project ?: string
}

function ProjectCard(props: Card) {
    const {image, title, link, project, blur} = props
  return (
    <article className="project relative">
        <Image
            src={image}
            alt='image'
            width={1024}
            height={720}
            placeholder='blur'
            blurDataURL={blur}
            className='img absolute'
            />
            {
            project &&  <p className="icon absolute">{project}</p>
            }

        <div className="content absolute flex">
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