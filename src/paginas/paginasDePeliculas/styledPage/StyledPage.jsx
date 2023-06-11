import { ListaDePeliculas } from '../../../componentes/listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../../../componentes/paginacion/Paginacion'
import { ResponsiveFiltros } from '../../../componentes/seccionFiltros/ResponsiveFiltros'
import svg from './test3.svg'

export function StyledPage({ titulo, peliculas, paginas, url }) {
  return (
    <section style={{ backgroundImage: `url(${svg})` }} className=''>
      <div className='max-w-7xl mx-auto p-1 sm:p-3'>
        <h1 className='text-2xl  text-center sm:text-4xl my-2 sm:my-4 py-10 font-extrabold rounded-lg'>
          Películas - {titulo}
        </h1>
        <ResponsiveFiltros />
        <div className='w-full flex'>
          <div className='w-full px-2'>
            <ListaDePeliculas peliculas={peliculas} />
          </div>
        </div>
        <Paginacion paginas={paginas} url={url} />
      </div>
    </section>
  )
}
