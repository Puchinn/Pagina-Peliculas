import { usePaginaGeneros } from './usePaginaGeneros'
import { StyledPage } from '../styledPage/StyledPage'

export function PaginaGeneros() {
  const { titulo, peliculas, paginas, url } = usePaginaGeneros()
  return (
    <StyledPage
      titulo={titulo}
      peliculas={peliculas}
      paginas={paginas}
      url={url}
    />
  )
}
