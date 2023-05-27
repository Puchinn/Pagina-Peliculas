import { usePeliculas } from './usePeliculas'
import { StyledPage } from './../styledPage/StyledPage'

export function Peliculas() {
  const { titulo, peliculas, paginas, url } = usePeliculas()
  return (
    <StyledPage
      titulo={titulo}
      peliculas={peliculas}
      paginas={paginas}
      url={url}
    />
  )
}
