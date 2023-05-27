import { Link } from 'react-router-dom'

export function Paginacion({ paginas, url }) {
  const obgPagina = paginas ?? {
    paginaActual: 1,
    paginasTotales: 1,
  }

  return (
    <div className='btn-group w-full flex justify-center py-4'>
      <Link className='btn' to={`${url}/page/${obgPagina.paginaActual - 1}`}>
        «
      </Link>
      <button className='btn'>Pagina {obgPagina.paginaActual}</button>
      <Link className='btn' to={`${url}/page/${obgPagina.paginaActual + 1}`}>
        »
      </Link>
    </div>
  )
}
