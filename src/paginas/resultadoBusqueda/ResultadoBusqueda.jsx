import { useBusqueda } from './useBusqueda'
import { StyledPage } from '../paginasDePeliculas/styledPage/StyledPage'
import { Loading } from '../../componentes/loading/Loading'

export default function ResultadoBusqueda() {
  const { peliculas, titulo, paginas, url, isLoading } = useBusqueda()

  return (
    <>
      {isLoading && <Loading />}
      <StyledPage
        paginas={paginas}
        peliculas={peliculas}
        titulo={titulo}
        url={url}
      />
    </>
  )
}
