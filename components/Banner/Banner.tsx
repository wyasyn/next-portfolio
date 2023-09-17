import './Banner.scss'
import { BiCodeAlt, BiPalette } from 'react-icons/bi'
import {FiPenTool} from 'react-icons/fi'

export default function Banner() {
  return (
    <div className="banner center absolute">
        <div className="ban center">
        <div className="icon">
            <BiCodeAlt />
        </div>
        <p>
            Development
        </p>
        </div>
        <div className="ban center">
        <div className="icon">
            <BiPalette />
        </div>
        <p>
            Design
        </p>
        </div>
        <div className="ban center">
        <div className="icon">
            <FiPenTool />
        </div>
        <p>
            Maintenance
        </p>
        </div>
  </div>
  )
}
