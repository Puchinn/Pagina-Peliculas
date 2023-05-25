import { ListaDeCategorias } from './../listaCategorias/ListaDeCategorias'
import { ListaTendencias } from './../listaTendencias/ListaTendencias'
import { ListaDeGeneros } from './../listaDeGeneros/ListaDeGeneros'
import { Buscar } from './../buscarPeliculas/Buscar'

export function Filtros() {
  return (
    <div className='filtros'>
      <Buscar />
      <ListaDeCategorias />
      <ListaTendencias />
      <ListaDeGeneros />
    </div>
  )
}
