import { useTendencias } from './useTendencias'
import { StyledPage } from './../styledPage/StyledPage'
import { Loading } from './../../../componentes/loading/Loading'

export function PaginaTendencias() {
  const { titulo, peliculas, paginas, url, isLoading } = useTendencias()

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
