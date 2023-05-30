import { Link } from 'react-router-dom'

export function PeliculaCard({ objPelicula }) {
  return (
    <li className='max-w-[200px] text-center px-1'>
      <Link to={`/pelicula/${objPelicula.id}`}>
        <div className='p-2 bg-base-300 rounded-md space-y-1'>
          <img
            className='rounded-sm'
            src={objPelicula.posterImg}
            alt={objPelicula.titulo}
            width={200}
          />
          <p className='text-white font-semibold text-lg break-all whitespace-nowrap overflow-hidden text-ellipsis'>
            {objPelicula.titulo}
          </p>
        </div>
      </Link>
    </li>
  )
}
