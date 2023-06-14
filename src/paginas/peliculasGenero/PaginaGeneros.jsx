import { usePaginaGeneros } from './usePaginaGeneros'
import { StyledPage } from '../componentes/styledPage/StyledPage'
import { Loading } from '../../componentes/loading/Loading'

export default function PaginaGeneros() {
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
