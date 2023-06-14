import { getMoviesByCategory } from "../../../../../servicios/getMoviesByCategory"
import { peliculasMapeadas } from './../../../../../adaptadores/mappedMovies'
import { useDataContext } from "../../../../../hooks/useDataContext"
import useSWR from 'swr'


export function useDataPopular() {
  const { idioma } = useDataContext()

  const { data, isLoading } = useSWR(idioma, () => (
    getMoviesByCategory({ category: 'popular', lang: idioma })
  ))
  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  return { peliculas, isLoading }
}