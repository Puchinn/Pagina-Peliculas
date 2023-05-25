import { Filtros } from '../../../componentes/seccionFiltros/Filtros'
import { usePaginaGeneros } from './usePaginaGeneros'
import { ListaDePeliculas } from '../../../componentes/listaDePeliculas/ListaDePeliculas'
import { Paginacion } from './../../../componentes/paginacion/Paginacion'

export function PaginaGeneros() {
  const { titulo, peliculas, paginas, url } = usePaginaGeneros()
  return (
    <section className='peliculas'>
      <h1 className='titulo'>Peliculas - {titulo} </h1>
      <div className='contenedor'>
        <Filtros />
        <div className='peliculas_lista'>
          <ListaDePeliculas peliculas={peliculas} />
        </div>
      </div>
      <Paginacion paginas={paginas} url={url} />
    </section>
  )
}
