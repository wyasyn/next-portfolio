import Image from 'next/image'
import './AboutPics.scss'

const AboutPicsData = [
    {
        url: '/assets/abt1.jpg',
        blur: '/blur/abt1.jpg'
    },
    {
        url: '/assets/abt2.jpg',
        blur: '/blur/abt2.jpg'
    },
]

function AboutPics() {
  return (
    <div className="about-pics-container container">
        {
            AboutPicsData.map(data => (
                <div className="image"
                    key={data.url}
                >
                    <Image
                        src={data.url}
                        alt='abt pics'
                        title='Yasin walum'
                        width={1080}
                        height={1512}
                        placeholder='blur'
                        blurDataURL={data.blur}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default AboutPics