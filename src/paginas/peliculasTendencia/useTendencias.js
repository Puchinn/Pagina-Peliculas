import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { paginasAdaptadas } from '../../adaptadores/adaptedPages'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useDataContext } from '../../hooks/useDataContext'
import { getTrendingMovies } from "../../servicios/getTrendingMovies"

const TITULOS_TENDENDIAS = {
  del_dia: 'Del dia',
  de_la_semana: 'De la semana'
}

const VALORES_TENDENCIAS = {
  del_dia: 'day',
  de_la_semana: 'week'
}

export function useTendencias() {
  const { query: categoria = 'del_dia', page = 1 } = useParams()
  const { idioma } = useDataContext()
  const [peliculas, setPeliculas] = useState([])
  const url = '/peliculas/tendencias/' + categoria
  const paginas = useRef()
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const controller = new AbortController()
    window.scrollTo(0, 0)
    setLoading(true)
    getTrendingMovies({ date: VALORES_TENDENCIAS[categoria], lang: idioma, page: page }, controller)
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
        setLoading(false)
      })

    return () => controller.abort()
  }, [idioma, categoria, page, pathname])

  return { titulo: TITULOS_TENDENDIAS[categoria], peliculas, paginas: paginas.current, url, isLoading: loading }
}