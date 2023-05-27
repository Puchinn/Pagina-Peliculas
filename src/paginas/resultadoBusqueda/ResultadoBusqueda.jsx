import { useBusqueda } from './useBusqueda'
import { StyledPage } from '../paginasDePeliculas/styledPage/StyledPage'

export function ResultadoBusqueda() {
  const { peliculas, titulo, paginas, url } = useBusqueda()

  return (
    <StyledPage
      paginas={paginas}
      peliculas={peliculas}
      titulo={titulo}
      url={url}
    />
  )
}
