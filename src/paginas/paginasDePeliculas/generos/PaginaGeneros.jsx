import { usePaginaGeneros } from './usePaginaGeneros'
import { StyledPage } from '../styledPage/StyledPage'
import { Loading } from './../../../componentes/loading/Loading'

export function PaginaGeneros() {
  const { titulo, peliculas, isLoading, paginas, url } = usePaginaGeneros()
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
