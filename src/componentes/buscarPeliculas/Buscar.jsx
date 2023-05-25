import { Form } from 'react-router-dom'

export function Buscar() {
  return (
    <Form action='/busqueda'>
      <input
        className=''
        type='text'
        name='query'
        placeholder='Buscar pelicula'
        required
      />
      <button className=''>Buscar</button>
    </Form>
  )
}
