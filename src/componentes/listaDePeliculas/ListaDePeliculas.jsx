import './estilos.css'
import { PeliculaCard } from '../pelicula/PeliculaCard'

export function ListaDePeliculas({ peliculas }) {
  return (
    <ul className='lista_de_peliculas'>
      {peliculas?.map((peli) => (
        <PeliculaCard key={peli.id} objPelicula={peli} />
      ))}
    </ul>
  )
}
