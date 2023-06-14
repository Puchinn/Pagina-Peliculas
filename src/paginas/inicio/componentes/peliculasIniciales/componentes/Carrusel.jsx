import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'
import { PeliculaCard } from './../../../../../componentes/pelicula/PeliculaCard'

export function Carrusel({ peliculas, urlLink, titulo, children, isLoading }) {
  const peliItems = peliculas?.map((peli) => (
    <PeliculaCard key={peli.id} pelicula={peli} />
  ))

  return (
    <section className='max-w-6xl mx-auto py-5'>
      <h2 className='text-2xl text-rose-700 sm:text-3xl px-6 my-4 font-extrabold'>
        {titulo}
      </h2>
      <div className='px-6'>{children}</div>
      <div className='p-3 sm:py-4 sm:rounded-sm'>
        {isLoading && <Loader />}
        <AliceCarousel
          autoWidth={true}
          autoPlay={true}
          items={peliItems}
          infinite={true}
          autoPlayInterval={1300}
          disableButtonsControls={true}
        />
        <Link
          className='mt-3 block py-3 text-center font-medium rounded bg-rose-600 shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 text-white'
          to={urlLink}
        >
          Ver más
        </Link>
      </div>
    </section>
  )
}

function Loader() {
  return (
    <div className='min-h-[280px] flex justify-center items-center'>
      <span className='loading loading-bars loading-lg'></span>
    </div>
  )
}
