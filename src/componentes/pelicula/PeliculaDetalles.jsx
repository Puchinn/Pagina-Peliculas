import { useDetalles } from './useDetalles'

export function PeliculaDetalles() {
  const { detalles, listaGeneros } = useDetalles()

  return (
    <section className='relative'>
      <div
        className=' absolute inset-0 bg-cover min-h-screen'
        style={{
          backgroundImage: `url(${detalles.fondoImg})`,
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-[93%]'></div>
      </div>
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
          <div>
            <h2 className='text-xl font-semibold pb-3'>Resumen</h2>
            <p className='font-semibold'> {detalles.descripcion} </p>
          </div>
        </div>
      </div>
    </section>
  )
}
