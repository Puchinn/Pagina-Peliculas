import { ListaDeCategorias } from './listaCategorias/ListaDeCategorias'
import { ListaTendencias } from './listaTendencias/ListaTendencias'
import { ListaDeGeneros } from './listaDeGeneros/ListaDeGeneros'
import { ToggleMenu } from './../header/ToggleMenu'
import { Form } from 'react-router-dom'
import { useState } from 'react'

export function ResponsiveFiltros() {
  const [active, setActive] = useState(false)

  return (
    <div className='py-2 px-2 bg-base-300 mb-4 rounded-md lg:hidden '>
      <div className='gap-x-2 flex'>
        <Form action='/busqueda' className='input-group'>
          <input
            name='query'
            type='text'
            placeholder='Search…'
            className='input input-bordered w-full'
          />
          <button className='btn btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </Form>
        <ToggleMenu value={active} setValue={setActive} />
      </div>
      {active && (
        <div>
          <ListaDeCategorias />
          <ListaTendencias />
          <ListaDeGeneros />
        </div>
      )}
    </div>
  )
}
