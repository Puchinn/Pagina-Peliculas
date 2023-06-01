import { usePeliculas } from './usePeliculas'
import { StyledPage } from './../styledPage/StyledPage'
import { Loading } from './../../../componentes/loading/Loading'

export function Peliculas() {
  const { titulo, peliculas, paginas, url, isLoading } = usePeliculas()

  return (
    <>
      {isLoading && <Loading />}
      <StyledPage
        titulo={titulo}
        peliculas={peliculas}
        paginas={paginas}
        url={url}
      />
    </>
  )
}
