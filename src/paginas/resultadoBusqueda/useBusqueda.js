import { getMoviesBySearch } from '../../servicios/getMoviesBySearch'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'
import { paginasAdaptadas } from './../../adaptadores/adaptedPages';

export function useBusqueda() {
  const [parametros] = useSearchParams()
  const query = parametros.get('query').split('/')
  const queryParam = query[0]
  const [peliculas, setPeliculas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { idioma } = useIdiomaContext()
  const paginas = useRef()
  const url = '/busqueda?query=' + query[0]
  const page = query[2]

  useEffect(() => {
    setIsLoading(true)
    getMoviesBySearch({ query: queryParam, lang: idioma, page: page || 1 })
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
        setIsLoading(false)
      })
  }, [queryParam, idioma, page,])

  return { peliculas, titulo: queryParam, paginas: paginas.current, url, isLoading }
}