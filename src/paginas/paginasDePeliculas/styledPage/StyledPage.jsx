import { Filtros } from '../../../componentes/seccionFiltros/Filtros'
import { ListaDePeliculas } from '../../../componentes/listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../../../componentes/paginacion/Paginacion'
import { ResponsiveFiltros } from '../../../componentes/seccionFiltros/ResponsiveFiltros'

export function StyledPage({ titulo, peliculas, paginas, url }) {
  return (
    <section className='max-w-7xl mx-auto my-3 p-1 sm:p-3 bg-base-200 sm:rounded-box'>
      <h1 className='text-2xl sm:text-4xl my-2 sm:my-4 font-semibold bg-base-300 p-4 rounded-lg'>
        Películas - {titulo}
      </h1>
      <ResponsiveFiltros />
      <div className='w-full flex'>
        <Filtros />
        <div className='w-full lg:w-[80%] px-2'>
          <ListaDePeliculas peliculas={peliculas} />
        </div>
      </div>
      <Paginacion paginas={paginas} url={url} />
    </section>
  )
}
