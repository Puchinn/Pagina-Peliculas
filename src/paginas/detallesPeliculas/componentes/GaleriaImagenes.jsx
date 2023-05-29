import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImages } from '../../../servicios/getImages'
import Carousel from 'better-react-carousel'

export function GaleriaImagenes() {
  const { peliId: id } = useParams()
  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    getImages({ id: id }).then((res) => setImagenes(res))
  }, [id])

  return (
    <section className='relative bg-black py-6'>
      <div className='px-4 py-4 max-w-7xl mx-auto'>
        {/* <Carousel
          hideArrow={true}
          showDots={true}
          loop={true}
          autoplay={4000}
          cols={3}
          gap={15}
        >
          {imagenes?.slice(0, 10).map((img) => (
            <Carousel.Item key={img.iso}>
              <img
                className='rounded-md py-2 object-cover'
                width={450}
                src={img.url}
              />
            </Carousel.Item>
          ))}
        </Carousel> */}
      </div>
    </section>
  )
}
