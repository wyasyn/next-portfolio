
import './ContactCard.scss'

type Info = {
  icon: any
  title: string
  info: string
  link: string
}

export default function ContactCard(props: Info) {
  const {icon, title, info, link} = props
  return (
    <a href={link} className="contact-card" target='_blank' rel='noreferrer'>
        <div className="icon">
            {icon}
        </div>
        <div className="card-info">
            <h4>
              {title}
            </h4>
            <p>
              {info}
            </p>
        </div>
    </a>
  )
}
