import { ListaDePeliculas } from '../listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../paginacion/Paginacion'
import { ResponsiveFiltros } from '../seccionFiltros/ResponsiveFiltros'

export function StyledPage({ titulo, peliculas, paginas, url }) {
  return (
    <section>
      <div className='max-w-7xl mx-auto p-1 sm:p-3'>
        <h1 className='text-2xl text-center sm:text-4xl my-2 sm:my-4 py-10 font-extrabold rounded-lg'>
          Películas - {titulo}
        </h1>
        <ResponsiveFiltros />
        <ListaDePeliculas peliculas={peliculas} />
        <Paginacion paginas={paginas} url={url} />
      </div>
    </section>
  )
}
