import { PeliculaCard } from '../../pelicula/PeliculaCard'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import 'react-alice-carousel/lib/alice-carousel.css'

export function Carrusel({ peliculas, urlLink, titulo, children }) {
  const peliItems = peliculas?.map((peli) => (
    <PeliculaCard key={peli.id} objPelicula={peli} />
  ))

  return (
    <section className='max-w-6xl mx-auto py-5'>
      <h2 className='text-2xl sm:text-3xl px-3 my-3 font-semibold'>{titulo}</h2>
      {children}
      <div className='p-3 sm:p-8 bg-neutral sm:rounded-sm'>
        <AliceCarousel
          autoWidth={true}
          autoPlay={true}
          items={peliItems}
          infinite={true}
          autoPlayInterval={1300}
          disableButtonsControls={true}
        />
        <Link className='btn mt-3 bg-base-200 text-white' to={urlLink}>
          ver más
        </Link>
      </div>
    </section>
  )
}
