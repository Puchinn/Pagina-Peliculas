import { useTendencias } from './useTendencias'
import { StyledPage } from './../styledPage/StyledPage'

export function PaginaTendencias() {
  const { titulo, peliculas, paginas, url } = useTendencias()
  return (
    <StyledPage
      titulo={titulo}
      peliculas={peliculas}
      paginas={paginas}
      url={url}
    />
  )
}
