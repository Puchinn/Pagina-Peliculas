import { Filtros } from '../../../componentes/seccionFiltros/Filtros'
import { usePeliculas } from './usePeliculas'
import { ListaDePeliculas } from '../../../componentes/listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../../../componentes/paginacion/Paginacion'

export function Peliculas() {
  const { titulo, peliculas, paginas, url } = usePeliculas()

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
