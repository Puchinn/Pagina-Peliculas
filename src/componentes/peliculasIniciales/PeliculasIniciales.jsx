import { Populares } from './Populares'
import { Tendencias } from './Tendencias'
import { usePeliculasIniciales } from './hooks/usePeliculasIniciales'
import './estilos.css'

export function PeliculasIniciales() {
  const { populares, tendencias, updateTrendingMovies, clave } =
    usePeliculasIniciales()

  return (
    <>
      <Tendencias
        pelisTendencias={tendencias}
        updateFunction={updateTrendingMovies}
        clave={clave}
      />
      <Populares peliculasPopulares={populares} />
    </>
  )
}
