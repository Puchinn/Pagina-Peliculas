import { Link } from 'react-router-dom'
import { PeliculaCard } from '../pelicula/PeliculaCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export function Populares({ peliculasPopulares }) {
  const pelis = peliculasPopulares?.map((peli) => (
    <PeliculaCard key={peli.id} objPelicula={peli} />
  ))

  return (
    <section className='max-w-6xl mx-auto py-5'>
      <h2 className='text-3xl px-3 my-3 font-semibold'>Lo mas Popular</h2>
      <div className='p-3 sm:p-8 bg-neutral sm:rounded-box'>
        <AliceCarousel
          autoWidth={true}
          autoPlay={true}
          items={pelis}
          infinite={true}
          autoPlayInterval={1300}
          disableButtonsControls={true}
        ></AliceCarousel>
        <button className='btn mt-3 bg-base-200 text-white'>
          <Link to={'/peliculas'}>Mas Peliculas</Link>
        </button>
      </div>
    </section>
  )
}
