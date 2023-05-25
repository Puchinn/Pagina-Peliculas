import { Filtros } from '../../componentes/seccionFiltros/Filtros'
import { useBusqueda } from './useBusqueda'
import { ListaDePeliculas } from '../../componentes/listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../../componentes/paginacion/Paginacion'

export function ResultadoBusqueda() {
  const { peliculas, titulo } = useBusqueda()

  return (
    <section className='peliculas'>
      <h1 className='titulo'>Resultados para : {titulo} </h1>

      <div className='contenedor'>
        <Filtros />
        <div className='peliculas_lista'>
          <ListaDePeliculas peliculas={peliculas} />
        </div>
      </div>
      <Paginacion />
    </section>
  )
}
