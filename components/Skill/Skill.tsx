import './Skill.scss'

type Props = {
    name: string,
    icon: any,
    overlay: string,
}

function Skill({icon, name, overlay}:Props) {
  return (
    <article className="skill">
      <div className="icon">
        {icon}
      </div>
      <p className='name'>
        {name}
      </p>
      <div className="overlay">
        <p>
        {overlay}
        </p>
      </div>
    </article>
  )
}


export default Skill