import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImages } from '../../../servicios/getImages'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export function GaleriaImagenes() {
  const { peliId: id } = useParams()
  const [imagenes, setImagenes] = useState([])

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
    getImages({ id: id }).then((res) => setImagenes(res))
  }, [id])

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
