import { Link } from 'react-router-dom'
import { PeliculaCard } from '../pelicula/PeliculaCard'

export function Tendencias({ pelisTendencias, updateFunction, clave }) {
  const dia = clave === 'day' && 'tab-active'
  const semana = clave === 'week' && 'tab-active'

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
        <ul id='scroll' className='w-full overflow-x-auto flex space-x-3 pb-5'>
          {pelisTendencias?.map((peli) => (
            <div key={peli.id} className='carousel-item'>
              <PeliculaCard objPelicula={peli} />
            </div>
          ))}
        </ul>
        <button className='btn mt-5 bg-base-200 text-white'>
          <Link to={'/peliculas/tendencias/del_dia'}>Mas Peliculas</Link>
        </button>
      </div>
    </section>
  )
}
