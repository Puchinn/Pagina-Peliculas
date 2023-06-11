import { usePeliculaDelDia } from './usePeliculaDelDia'
import { Loading } from '../../../../componentes/loading/Loading'
import { Link } from 'react-router-dom'

export function PeliculaDelDia() {
  const { objPelicula, isLoading } = usePeliculaDelDia()

  if (isLoading) {
    return <Loading />
  }

  return (
    <section
      style={{ backgroundImage: `url(${objPelicula.imgFondo})` }}
      className='relative min-h-[75vh] bg-cover bg-top'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-black'></div>

      <div className='relative mx-auto max-w-7xl px-4 py-28 text-white'>
        <h1 className='text-4xl font-extrabold sm:text-5xl'>
          Pelicula Del Dia:
          <strong className='block text-rose-700'>{objPelicula.titulo}</strong>
        </h1>

        <p className='mt-4 max-w-xl font-semibold'>{objPelicula.desc}</p>

        <Link
          to={'/pelicula/' + objPelicula.id}
          className='block text-center mt-8 max-w-xs py-3 text-sm mx-auto sm:mx-0 font-medium rounded bg-rose-600 shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500'
        >
          Ver mas detalles
        </Link>
      </div>
    </section>
  )
}
