import { usePeliculasIniciales } from './hooks/usePeliculasIniciales'
import { Carrusel } from './componentes/Carrusel'
import { Tabs } from './componentes/Tabs'

export function PeliculasIniciales() {
  const { populares, tendencias, updateTrendingMovies, clave } =
    usePeliculasIniciales()

  return (
    <>
      <Carrusel
        peliculas={tendencias}
        titulo={'Tendencias'}
        urlLink={'/peliculas/tendencias/del_dia'}
      >
        <Tabs palabraActiva={clave} updateFunction={updateTrendingMovies} />
      </Carrusel>
      <Carrusel
        peliculas={populares}
        titulo={'Lo Más Popular'}
        urlLink={'/peliculas'}
      />
    </>
  )
}
