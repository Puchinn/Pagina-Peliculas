import { useParams } from "react-router-dom"
import { getTrendingMovies } from "../../../servicios/getTrendingMovies"
import { useEffect, useRef, useState } from "react";
import { useIdiomaContext } from "../../../hooks/useIdiomaContext"
import { peliculasMapeadas } from "../../../adaptadores/mappedMovies"
import { paginasAdaptadas } from "../../../adaptadores/adaptedPages";

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
  const { idioma } = useIdiomaContext()
  const [peliculas, setPeliculas] = useState([])
  const url = '/peliculas/tendencias/' + categoria
  const paginas = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
    getTrendingMovies({ date: VALORES_TENDENCIAS[categoria], lang: idioma, page: page })
      .then(res => {
        const nuevasPelis = peliculasMapeadas({ originalMovies: res.results })
        paginas.current = paginasAdaptadas({ pagesObject: res })
        setPeliculas(nuevasPelis)
      })
  }, [idioma, categoria, page])

  return { titulo: TITULOS_TENDENDIAS[categoria], peliculas, paginas: paginas.current, url }
}