import { useState, useEffect } from "react"
import { getTrendingMovies } from "../../../servicios/getTrendingMovies"
import { getMoviesByCategory } from "../../../servicios/getMoviesByCategory"
import { peliculasMapeadas } from "../../../adaptadores/mappedMovies"
import { useIdiomaContext } from "../../../hooks/useIdiomaContext"

export function usePeliculasIniciales() {
  const [tendencias, setTendencias] = useState([])
  const [populares, setPopulares] = useState([])
  const [clave, setClave] = useState('day')
  const { idioma } = useIdiomaContext()

  useEffect(() => {
    getMoviesByCategory({ category: 'popular', lang: idioma })
      .then(res => {
        const peliculasPopulares = peliculasMapeadas({ originalMovies: res.results })
        setPopulares(peliculasPopulares)
      })

  }, [idioma])

  useEffect(() => {
    getTrendingMovies({ lang: idioma, date: clave })
      .then(res => {
        const nuevasTendencias = peliculasMapeadas({ originalMovies: res.results })
        setTendencias(nuevasTendencias)
      })
  }, [clave, idioma])

  const updateTrendingMovies = (evento) => {
    setClave(evento.target.value)
  }

  return { tendencias, populares, updateTrendingMovies, clave }

}