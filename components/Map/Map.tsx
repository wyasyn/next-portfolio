import { HeadingSection } from '..'
import './Map.scss'

export default function Map() {
  return (
    <>
      <HeadingSection
        title='Find Us on Google Maps'
       />
      <div className="map" id='location'>
        <div className='imap'><iframe title='location' width="100%" height="600"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kyaliwajjala,%20Wakiso+(Primates%20Code)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>
      </div>
    </>
  )
}
