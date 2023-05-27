import { Form } from 'react-router-dom'

export function Buscar() {
  return (
    <Form action='/busqueda' className='flex flex-col gap-y-3 my-2'>
      <input
        className='input text-lg'
        type='text'
        name='query'
        placeholder='Buscar pelicula'
        required
      />
      <button className='btn'>Buscar</button>
    </Form>
  )
}
