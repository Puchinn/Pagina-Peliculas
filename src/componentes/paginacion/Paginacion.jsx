import './estilos.css'
import { Link } from 'react-router-dom'

export function Paginacion({ paginas, url }) {
  const obgPagina = paginas ?? {
    paginaActual: 1,
    paginasTotales: 1,
  }

  return (
    <div className='paginacion'>
      <Link to={`${url}/page/${obgPagina.paginaActual - 1}`}>
        Pagina Anterior
      </Link>
      <Link to={`${url}/page/${obgPagina.paginaActual + 1}`}>
        Siguiente Pagina
      </Link>
    </div>
  )
}
