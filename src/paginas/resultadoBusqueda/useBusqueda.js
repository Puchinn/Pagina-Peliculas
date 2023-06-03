import { getMoviesBySearch } from '../../servicios/getMoviesBySearch'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'
import { paginasAdaptadas } from './../../adaptadores/adaptedPages'
import { useLocation } from 'react-router-dom'

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
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const controller = new AbortController()
    setIsLoading(true)
    getMoviesBySearch({ query: queryParam, lang: idioma, page: page || 1 }, controller)
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [queryParam, idioma, page, pathname])

  return { peliculas, titulo: queryParam, paginas: paginas.current, url, isLoading }
}