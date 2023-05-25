import { Link } from 'react-router-dom'

export function ListaTendencias() {
  return (
    <div className='tendencias'>
      <h2>Tendencias:</h2>
      <ul>
        <li>
          <Link to={'/peliculas/tendencias/del_dia'}>Del dia</Link>
        </li>
        <li>
          <Link to={'/peliculas/tendencias/de_la_semana'}>De la semana</Link>
        </li>
      </ul>
    </div>
  )
}
