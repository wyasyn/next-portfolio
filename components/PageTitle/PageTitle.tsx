import './PageTitle.scss'

type Head = {
    head: string
    title: string
    description: string
}

export default function PageTitle(props: Head) {
    const { head, title, description } = props
  return (
    <header className='page-header'>
        <div className="header-container container">
            <p className='tease'>
                {head}
            </p>
            <h1 className='page-title'>
                {title}
            </h1>
            <p className='intro-statement'>
                {description}
            </p>
        </div>
    </header>
  )
}
