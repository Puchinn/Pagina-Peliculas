import { useParams } from 'react-router-dom'
import { peliculasMapeadas } from '../../../adaptadores/mappedMovies'
import { getMoviesByCategory } from '../../../servicios/getMoviesByCategory'
import { useState, useEffect, useRef } from 'react'
import { useIdiomaContext } from '../../../hooks/useIdiomaContext'
import { paginasAdaptadas } from '../../../adaptadores/adaptedPages'
import { useLocation } from 'react-router-dom'

const TITULOS_CATEGORIAS = {
  populares: 'Populares',
  en_vivo: 'En Vivo',
  estrenos: 'Estrenos',
  mas_valoradas: 'Mas Valoradas'
}

const VALORES_CATEGORIAS = {
  populares: 'popular',
  en_vivo: 'now_playing',
  estrenos: 'upcoming',
  mas_valoradas: 'top_rated'
}

export function usePeliculas() {
  const { query: categoria = 'popular', page = 1 } = useParams()
  const url = '/peliculas/' + categoria
  const [peliculas, setPeliculas] = useState([])
  const { idioma } = useIdiomaContext()
  const titulo = TITULOS_CATEGORIAS[categoria] || 'Populares'
  const paginas = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const controller = new AbortController()
    window.scrollTo(0, 0)
    setIsLoading(true)
    getMoviesByCategory({ category: VALORES_CATEGORIAS[categoria], lang: idioma, page: page }, controller)
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [categoria, idioma, page, pathname])

  return { titulo, peliculas, isLoading, paginas: paginas.current, url }
}