import { BlogData } from '@/constants/data'
import { BlogCard, HeadingSection } from '..'
import './Blog.scss'

export default function Blog() {
  return (
    <div className="blog-container container">
        <HeadingSection
        title='Useful Information'
         />
         <div className="blog-content">
            {
              BlogData.map((data, index) => (
                <BlogCard 
                key={index}
                {...data}
                />
              ))
            }
         </div>
    </div>
  )
}
