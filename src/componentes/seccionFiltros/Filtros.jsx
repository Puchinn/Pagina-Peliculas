import { ListaDeCategorias } from './listaCategorias/ListaDeCategorias'
import { ListaTendencias } from './listaTendencias/ListaTendencias'
import { ListaDeGeneros } from './listaDeGeneros/ListaDeGeneros'
import { Buscar } from './../buscarPeliculas/Buscar'

export function Filtros() {
  return (
    <div className='bg-base-300 rounded-md p-3 w-[30%] hidden lg:block'>
      <Buscar />
      <ListaDeCategorias />
      <ListaTendencias />
      <ListaDeGeneros />
    </div>
  )
}
