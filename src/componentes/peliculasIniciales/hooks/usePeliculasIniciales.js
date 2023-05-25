import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../../servicios/getTrendingMovies";
import { getMoviesByCategory } from "../../../servicios/getMoviesByCategory";
import { peliculasMapeadas } from "../../../adaptadores/mappedMovies";
import { useIdiomaContext } from "../../../hooks/useIdiomaContext";

export function usePeliculasIniciales() {
  const [tendencias, setTendencias] = useState([])
  const [populares, setPopulares] = useState([])
  const { idioma } = useIdiomaContext()

  useEffect(() => {

    getTrendingMovies({ lang: idioma })
      .then(res => {
        const nuevasTendencias = peliculasMapeadas({ originalMovies: res.results })
        setTendencias(nuevasTendencias)
      })

    getMoviesByCategory({ category: 'popular', lang: idioma })
      .then(res => {
        const peliculasPopulares = peliculasMapeadas({ originalMovies: res.results })
        setPopulares(peliculasPopulares)
      })

  }, [idioma])

  const updateTrendingMovies = (evento) => {
    getTrendingMovies({ date: evento.target.value, lang: idioma })
      .then(res => {
        const nuevasTendencias = peliculasMapeadas({ originalMovies: res.results })
        setTendencias(nuevasTendencias)
      })
  }

  return { tendencias, populares, updateTrendingMovies }

}