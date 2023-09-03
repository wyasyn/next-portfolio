import Image from 'next/image'
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
        <Image
          src={photo}
          alt='testimony'
          width={80}
          height={80}
         />
    </div>
    <div className="name">
        <p className='comment'>{comment}</p>
        <h3>{name}</h3>
        <p>{title} </p>
    </div>
    </div>
  )
}
