import { useDetalles } from './useDetalles'
import { Estrellas } from './componentes/Estrellas'
import { FondoDetalles } from './componentes/FondoDetalles'
import { GaleriaImagenes } from './componentes/GaleriaImagenes'
import { Loader } from './componentes/Loader'

export default function PeliculaDetalles() {
  const { detalles, listaGeneros, hora, fecha, isLoading } = useDetalles()

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className='relative '>
        <FondoDetalles img={detalles.fondoImg} />
        <div className='lg:flex px-3 gap-x-7 z-10 relative max-w-7xl mx-auto py-10 lg:py-28'>
          <div className='lg:min-w-[350px] w-[200px] min-h-[300px] lg:min-h-[525px] my-3 lg:my-0 rounded-box bg-base-200 mx-auto lg:mx-0'>
            <img
              className='mx-auto h-full w-full object-cover rounded-box '
              src={detalles.posterImg}
              alt={detalles.titulo}
              width={200}
            />
          </div>
          <div className='space-y-2'>
            <h1 className='text-4xl sm:text-5xl font-bold'>
              {detalles.titulo}
            </h1>
            <h2 className='text-xl font-semibold italic'>
              {detalles.subTitulo}
            </h2>
            <h2 className='text-lg font-semibold'>
              {fecha} - <span className='font-bold'>{listaGeneros}</span>
              <span className='font-bold'> - {hora} </span>
            </h2>
            <Estrellas calificacion={detalles.calificacion} />
            <div>
              <h2 className='text-xl font-semibold pb-2 pt-3'>Resumen</h2>
              <p className='font-semibold'> {detalles.descripcion} </p>
            </div>
          </div>
        </div>
      </section>
      <GaleriaImagenes />
    </>
  )
}
