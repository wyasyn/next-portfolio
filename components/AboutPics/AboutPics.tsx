import Image from 'next/image'
import './AboutPics.scss'

const AboutPicsData = [
    {
        url: '/assets/abt1.jpg'
    },
    {
        url: '/assets/abt2.jpg'
    },
]

function AboutPics() {
  return (
    <div className="about-pics-container container">
        {
            AboutPicsData.map(data => (
                <Image
                    key={data.url}
                    src={data.url}
                    alt='abt pics'
                    title='Yasin walum'
                    width={1080}
                    height={1512}
                />
            ))
        }
    </div>
  )
}

export default AboutPics