import { Link } from 'react-router-dom'

export function PeliculaCard({ objPelicula }) {
  return (
    <div className='max-w-[160px] mx-auto sm:max-w-[200px] text-center px-1'>
      <Link to={`/pelicula/${objPelicula.id}`}>
        <div className='p-2 rounded-md space-y-1'>
          <img
            className='rounded-md w-full border object-cover min-h-[185px] xl:min-h-[260px]'
            src={objPelicula.posterImg}
            alt={objPelicula.titulo}
          />
          <p className='text-white font-semibold text-lg'>
            {objPelicula.titulo}
          </p>
        </div>
      </Link>
    </div>
  )
}
