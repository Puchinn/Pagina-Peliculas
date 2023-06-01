import { useParams } from 'react-router-dom'
import { peliculasMapeadas } from '../../../adaptadores/mappedMovies'
import { getMoviesByCategory } from '../../../servicios/getMoviesByCategory'
import { useState, useEffect, useRef } from 'react'
import { useIdiomaContext } from '../../../hooks/useIdiomaContext'
import { paginasAdaptadas } from '../../../adaptadores/adaptedPages'

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

  useEffect(() => {
    window.scrollTo(0, 0)
    getMoviesByCategory({ category: VALORES_CATEGORIAS[categoria], lang: idioma, page: page })
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
      })
  }, [categoria, idioma, page])

  return { titulo, peliculas, paginas: paginas.current, url }
}