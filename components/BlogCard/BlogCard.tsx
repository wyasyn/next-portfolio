import Image from 'next/image'
import './BlogCard.scss'
import { Spring } from 'framer-motion'

type Card = {
    image: string
    title: string
    article: string
    link: string
    blur: string
}

export default function BlogCard(props: Card) {
    const {image, title, article, link, blur} = props
  return (
    <article className='blog-card'>
        <div className="image center">
            <Image
                src={image}
                alt='blog image'
                width={640}
                height={427}
                placeholder='blur'
                blurDataURL={blur}
                className='img'
            />
        </div>
         <div className="card-content">
            <h3>
                {title}
            </h3>
            <p>
                {article}
            </p>
            <a href={link} className="btn" target='_blank' rel='noreferrer'>view</a>
         </div>
    </article>
  )
}
