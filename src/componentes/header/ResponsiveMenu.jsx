import { Svg } from './Svg'
import { Link } from 'react-router-dom'

export function ResponsiveMenu() {
  return (
    <div className='dropdown w-full sm:hidden'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <Svg />
      </label>
      <ul
        tabIndex={0}
        className='menu overflow-hidden menu-lg w-full bg-black/95 dropdown-content mt-3 shadow'
      >
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'/peliculas'}>Peliculas</Link>
        </li>
        <li>
          <Link to={'/peliculas'}>Series</Link>
        </li>
      </ul>
    </div>
  )
}
