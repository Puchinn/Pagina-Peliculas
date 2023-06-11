import { Form } from 'react-router-dom'

export function BuscarPeliculas() {
  return (
    <section className='bg-black text-center py-16 sm:pt-32'>
      <h1 className='font-bold text-4xl sm:text-5xl'>Buscar Peliculas</h1>
      <p className='py-4 text-sm italic'>SOLO PELICULAS 🤙🏾</p>
      <Form action='/busqueda' className='flex gap-x-2 mx-auto px-2 max-w-md'>
        <input
          className='input input-bordered bg-transparent w-full text-lg'
          name='query'
          placeholder='Buscar pelicula...'
          required
          autoComplete='off'
        />
        <button className='btn btn-outline'>Buscar</button>
      </Form>
    </section>
  )
}
