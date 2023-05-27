import { Link } from 'react-router-dom'

export function PeliculaCard({ objPelicula }) {
  return (
    <li className='max-w-[160px] text-center'>
      <Link to={`/pelicula/${objPelicula.id}`}>
        <img src={objPelicula.posterImg} alt={objPelicula.titulo} width={150} />
        <p className='break-all whitespace-nowrap overflow-hidden text-ellipsis'>
          {objPelicula.titulo}
        </p>
      </Link>
    </li>
  )
}
