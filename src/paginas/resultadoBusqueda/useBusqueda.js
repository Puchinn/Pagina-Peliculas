import { getMoviesBySearch } from '../../servicios/getMoviesBySearch'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'


export function useBusqueda() {
  const [parametros] = useSearchParams()
  const query = parametros.get('query')
  const [peliculas, setPeliculas] = useState([])
  const { idioma } = useIdiomaContext()


  useEffect(() => {
    getMoviesBySearch({ query: query, lang: idioma })
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        setPeliculas(nuevasPelis)
      })
  }, [query, idioma])

  return { peliculas, titulo: query }

}