import { Link } from 'react-router-dom'
import { PeliculaCard } from '../pelicula/PeliculaCard'

export function Tendencias({ pelisTendencias, updateFunction }) {
  return (
    <section className='seccion_peliculas'>
      <h2>Tendencias</h2>
      <div>
        <button onClick={updateFunction} value={'day'}>
          Del dia
        </button>
        <button onClick={updateFunction} value={'week'}>
          De la semana
        </button>
      </div>
      <ul className='lista_peliculas'>
        {pelisTendencias?.map((peli) => (
          <PeliculaCard key={peli.id} objPelicula={peli} />
        ))}
      </ul>
      <button>
        <Link to={'/peliculas/tendencias/del_dia'}>Mas Peliculas</Link>
      </button>
    </section>
  )
}
