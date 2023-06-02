import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImages } from '../../../servicios/getImages'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useLocation } from 'react-router-dom'

export function GaleriaImagenes() {
  const { peliId: id } = useParams()
  const [imagenes, setImagenes] = useState([])
  const { pathname } = useLocation()

  const items = imagenes
    ?.slice(0, 10)
    .map((img, index) => (
      <img
        key={img.iso}
        className='rounded-2xl py-2 object-cover px-3'
        width={450}
        src={img.url}
        data-value={index}
      />
    ))

  useEffect(() => {
    const controller = new AbortController()
    getImages({ id: id }, controller).then((res) => setImagenes(res))

    return () => controller.abort()
  }, [id, pathname])

  return (
    <section className='relative bg-black py-6'>
      <div className='px-4 py-4 max-w-7xl mx-auto shadow-inner'>
        <AliceCarousel
          autoWidth={true}
          autoPlay={true}
          items={items}
          infinite={true}
          autoPlayInterval={3000}
          disableButtonsControls={true}
        ></AliceCarousel>
      </div>
    </section>
  )
}
