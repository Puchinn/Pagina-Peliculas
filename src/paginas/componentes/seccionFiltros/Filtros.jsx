import { ListaDeCategorias } from './listaCategorias/ListaDeCategorias'
import { ListaTendencias } from './listaTendencias/ListaTendencias'
import { ListaDeGeneros } from './listaDeGeneros/ListaDeGeneros'
import { Form } from 'react-router-dom'

export function Filtros() {
  return (
    <div className='rounded-md p-3 hidden lg:block'>
      <Form action='/busqueda' className='flex flex-col gap-y-3 my-2'>
        <input
          placeholder='Buscar pelicula'
          className='input text-lg'
          name='query'
          type='text'
          required
        />
        <button className='btn'>Buscar</button>
      </Form>
      <ListaDeCategorias />
      <ListaTendencias />
      <ListaDeGeneros />
    </div>
  )
}
