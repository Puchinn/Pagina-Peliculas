import { Link } from 'react-router-dom'
import { PeliculaCard } from '../pelicula/PeliculaCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export function Tendencias({ pelisTendencias, updateFunction, clave }) {
  const dia = clave === 'day' && 'tab-active'
  const semana = clave === 'week' && 'tab-active'

  const pelis = pelisTendencias?.map((peli) => (
    <PeliculaCard key={peli.id} objPelicula={peli} />
  ))
  return (
    <section className='max-w-6xl mx-auto py-5'>
      <h2 className='text-3xl my-3 text-violet-400 font-semibold'>
        Tendencias
      </h2>
      <div className='tabs '>
        <button
          className={`tab tab-lg tab-lifted ${dia}`}
          onClick={updateFunction}
          value={'day'}
        >
          Del Dia
        </button>
        <button
          className={`tab tab-lg tab-lifted ${semana}`}
          onClick={updateFunction}
          value={'week'}
        >
          De La Semana
        </button>
      </div>
      <div className='p-8 bg-neutral rounded-box rounded-tl-none'>
        <AliceCarousel
          autoWidth={true}
          autoPlay={true}
          items={pelis}
          infinite={true}
          autoPlayInterval={1300}
          disableButtonsControls={true}
        ></AliceCarousel>
        <button className='btn mt-3 bg-base-200 text-white'>
          <Link to={'/peliculas/tendencias/del_dia'}>Mas Peliculas</Link>
        </button>
      </div>
    </section>
  )
}
