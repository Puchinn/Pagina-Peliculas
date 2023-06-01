import { CambiarIdioma } from './CambiarIdioma'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className='navbar bg-base-300 py-3'>
      <nav className='max-w-5xl mx-auto w-full'>
        <ul className='flex-1 menu menu-horizontal px-1 gap-x-2'>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/peliculas'}>Peliculas</Link>
          </li>
        </ul>
        <CambiarIdioma />
      </nav>
    </header>
  )
}
