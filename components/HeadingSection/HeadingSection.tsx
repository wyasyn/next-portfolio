import './Heading.scss'

type Prop = {
    title: string
}

export default function HeadingSection(props: Prop) {
    const { title } = props
  return (
    <h2 className='section-heading'>
        {title}
    </h2>
  )
}
