import { Filtros } from '../../../componentes/seccionFiltros/Filtros'
import { ListaDePeliculas } from '../../../componentes/listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../../../componentes/paginacion/Paginacion'

export function StyledPage({ titulo, peliculas, paginas, url }) {
  return (
    <section className='max-w-7xl mx-auto my-3 p-3 bg-base-200 rounded-box'>
      <h1 className='text-4xl my-4 font-semibold bg-base-300 p-4 rounded-lg'>
        Películas - {titulo}
      </h1>
      <div className='w-full flex'>
        <Filtros />
        <div className='w-[80%] px-8'>
          <ListaDePeliculas peliculas={peliculas} />
        </div>
      </div>
      <Paginacion paginas={paginas} url={url} />
    </section>
  )
}
