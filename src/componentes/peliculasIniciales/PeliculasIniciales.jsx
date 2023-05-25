import { Populares } from './Populares'
import { Tendencias } from './Tendencias'
import { usePeliculasIniciales } from './hooks/usePeliculasIniciales'
import './estilos.css'

export function PeliculasIniciales() {
  const { populares, tendencias, updateTrendingMovies } =
    usePeliculasIniciales()

  return (
    <>
      <Tendencias
        pelisTendencias={tendencias}
        updateFunction={updateTrendingMovies}
      />
      <Populares peliculasPopulares={populares} />
    </>
  )
}
