import './Service.scss'

type Props = {
    icon: any
    title: string
}

function Service({icon, title}: Props) {
  return (
    <article className="service">
        <div className="icon">
            {icon}
        </div>
        <p>
            {title}
        </p>
    </article>
  )
}


export default Service