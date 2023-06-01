import { Form } from 'react-router-dom'

export function BuscarPeliculas() {
  return (
    <div className='hero py-20 sm:py-32 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-lg'>
          <h1 className='text-4xl sm:text-5xl font-bold'>Buscar Peliculas</h1>
          <p className='py-4 text-sm italic'>SOLO PELICULAS 🤙🏾</p>
          <Form action='/busqueda' className='flex gap-x-2'>
            <input
              autoComplete='off'
              className='input w-full text-lg'
              type='text'
              name='query'
              placeholder='Buscar pelicula...'
              required
            />
            <button className='btn'>Buscar</button>
          </Form>
        </div>
      </div>
    </div>
  )
}
