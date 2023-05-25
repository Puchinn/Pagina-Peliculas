import { useGeneros } from '../../../hooks/useGeneros'
import { useParams } from 'react-router-dom'
import { getMoviesByGeners } from '../../../servicios/getMoviesByGeners'
import { useEffect, useState, useRef } from 'react'
import { peliculasMapeadas } from '../../../adaptadores/mappedMovies'
import { useIdiomaContext } from '../../../hooks/useIdiomaContext'
import { paginasAdaptadas } from '../../../adaptadores/adaptedPages'

export function usePaginaGeneros() {
  const { idioma } = useIdiomaContext()
  const { query: id = '28', page = 1 } = useParams()
  const { generos } = useGeneros()
  const [peliculas, setPeliculas] = useState([])
  const findGenero = generos.find(obj => obj.id === parseInt(id))
  const titulo = findGenero?.name ?? 'Sin generos'
  const paginas = useRef()
  const url = '/peliculas/generos/' + id

  useEffect(() => {
    getMoviesByGeners({ gener: findGenero?.id, lang: idioma, page: page })
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
      })
  }, [findGenero?.id, idioma, page])

  return { titulo, peliculas, paginas: paginas.current, url }
}