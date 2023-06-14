import { useState } from "react"
import { getTrendingMovies } from "../../../../../servicios/getTrendingMovies"
import { peliculasMapeadas } from "../../../../../adaptadores/mappedMovies"
import { useDataContext } from "../../../../../hooks/useDataContext"
import useSWR from 'swr'

export function useDataTrending() {
  const { idioma } = useDataContext()
  const [clave, setClave] = useState('day')

  const { data, isLoading } = useSWR([idioma, clave], () => (
    getTrendingMovies({ date: clave, lang: idioma })
  ))
  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  const updateTrendingMovies = (evento) => {
    setClave(evento.target.value)
  }

  return { peliculas, isLoading, updateTrendingMovies, clave }
}