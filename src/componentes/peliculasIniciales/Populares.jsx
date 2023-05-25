import { Link } from 'react-router-dom'
import { PeliculaCard } from '../pelicula/PeliculaCard'

export function Populares({ peliculasPopulares }) {
  return (
    <section className='seccion_peliculas'>
      <h2>Lo mas Popular</h2>
      <ul className='lista_peliculas'>
        {peliculasPopulares?.map((peli) => (
          <PeliculaCard key={peli.id} objPelicula={peli} />
        ))}
      </ul>
      <button>
        <Link to={'/peliculas'}>Ver mas peliculas</Link>
      </button>
    </section>
  )
}
