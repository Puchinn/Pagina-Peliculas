import { useBusqueda } from './useBusqueda'
import { Loading } from '../../componentes/loading/Loading'
import { StyledPage } from './../componentes/styledPage/StyledPage'

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
