import './Testimony.scss'

type TestimonyCard = {
    name: string
    photo: string
    title: string
    comment: string
}

export default function Testimony(props: TestimonyCard) {
    const {name, photo, title, comment} = props
  return (
    <div className="testimony">
    <div className="pic">
        <img src={photo} alt="testimony" loading='lazy' />
    </div>
    <div className="name">
        <p className='comment'>{comment}</p>
        <h3>{name}</h3>
        <p>{title} </p>
    </div>
    </div>
  )
}
