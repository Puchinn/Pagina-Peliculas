import { usePeliculaDelDia } from './usePeliculaDelDia'
import { Link } from 'react-router-dom'

export function PeliculaDelDia() {
  const { objPelicula, isLoading } = usePeliculaDelDia()
  if (isLoading) {
    return <h1>cargando...</h1>
  }
  return (
    <section
      style={{
        backgroundImage: `url(${objPelicula.imgFondo})`,
      }}
      className={`relative min-h-[75vh] bg-cover bg-center bg-no-repeat`}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-black'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 lg:flex'>
        <div className='max-w-xl'>
          <h1 className='text-3xl text-white font-extrabold sm:text-5xl'>
            Pelicula Del Dia:
            <strong className='block font-extrabold mt-4 text-rose-700'>
              {objPelicula.titulo}
            </strong>
          </h1>

          <p className='mt-4 text-ellipsis sm:text-base/relaxed text-white font-semibold'>
            {objPelicula.desc}
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <Link
              to={'/pelicula/' + objPelicula.id}
              className='block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'
            >
              Ver mas detalles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
