import { Link } from 'react-router-dom'

export function PeliculaCard({ objPelicula }) {
  return (
    <div className='max-w-[160px] mx-auto sm:max-w-[200px] text-center px-1'>
      <Link to={`/pelicula/${objPelicula.id}`}>
        <div className='p-2 bg-base-300 rounded-md space-y-1'>
          <img
            className='rounded-sm w-full object-cover min-h-[185px] xl:min-h-[260px]'
            src={objPelicula.posterImg}
            alt={objPelicula.titulo}
          />
          <p className='text-white font-semibold text-lg break-all whitespace-nowrap overflow-hidden text-ellipsis'>
            {objPelicula.titulo}
          </p>
        </div>
      </Link>
    </div>
  )
}
