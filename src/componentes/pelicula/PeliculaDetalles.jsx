import { useDetalles } from './useDetalles'
import { Estrellas } from './Estrellas'
import { FondoDetalles } from './FondoDetalles'

export function PeliculaDetalles() {
  const { detalles, listaGeneros } = useDetalles()

  return (
    <section className='relative'>
      <FondoDetalles img={detalles.fondoImg} />
      <div className='detalles px-3 gap-x-7 z-10 relative max-w-7xl mx-auto flex py-28'>
        <img
          className='w-[350px] rounded-box'
          src={detalles.posterImg}
          alt={detalles.titulo}
        />
        <div className='space-y-2'>
          <h1 className='text-5xl font-bold'>{detalles.titulo}</h1>
          <h2 className='text-xl font-semibold italic'>{detalles.subTitulo}</h2>
          <h2 className='text-lg font-semibold'>
            {detalles.lanzamiento} -{' '}
            <span className='font-bold'>{listaGeneros}</span>
          </h2>
          <Estrellas calificacion={detalles.calificacion} />
          <div>
            <h2 className='text-xl font-semibold pb-2'>Resumen</h2>
            <p className='font-semibold'> {detalles.descripcion} </p>
          </div>
        </div>
      </div>
    </section>
  )
}
