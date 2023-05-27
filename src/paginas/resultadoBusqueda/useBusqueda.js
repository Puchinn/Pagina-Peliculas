import { getMoviesBySearch } from '../../servicios/getMoviesBySearch'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'
import { paginasAdaptadas } from './../../adaptadores/adaptedPages';


export function useBusqueda() {
  const [parametros] = useSearchParams()
  const query = parametros.get('query').split('/')
  const [peliculas, setPeliculas] = useState([])
  const { idioma } = useIdiomaContext()
  const paginas = useRef()
  const url = '/busqueda?query=' + query[0]
  const page = query[2]

  useEffect(() => {
    getMoviesBySearch({ query: query[0], lang: idioma, page: page || 1 })
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
      })
  }, [query, idioma, page])

  return { peliculas, titulo: query[0], paginas: paginas.current, url }

}