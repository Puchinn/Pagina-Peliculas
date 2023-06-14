import { usePeliculas } from './usePeliculas'
import { StyledPage } from '../componentes/styledPage/StyledPage'
import { Loading } from '../../componentes/loading/Loading'

export default function Peliculas() {
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
