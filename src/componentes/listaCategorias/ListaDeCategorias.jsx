import { Link } from 'react-router-dom'

export function ListaDeCategorias() {
  return (
    <div className='categorias'>
      <h2>Ver por :</h2>
      <ul>
        <li>
          <Link to={'/peliculas/populares'}>Mayor Popularidad</Link>
        </li>
        <li>
          <Link to={'/peliculas/en_vivo'}>En Vivo</Link>
        </li>
        <li>
          <Link to={'/peliculas/estrenos'}>Estrenos</Link>
        </li>
        <li>
          <Link to={'/peliculas/mas_valoradas'}>Mas Valoradas</Link>
        </li>
      </ul>
    </div>
  )
}
