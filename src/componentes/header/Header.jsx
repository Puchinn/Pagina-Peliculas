import './header.css'
import { CambiarIdioma } from './CambiarIdioma'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/peliculas'}>Peliculas</Link>
          </li>
        </ul>
      </nav>
      <CambiarIdioma />
    </header>
  )
}
