import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'
import { getMovieDetails } from '../../servicios/getMovieDetails'

export function useDetalles() {
  const { peliId } = useParams()
  const { idioma } = useIdiomaContext()
  const [detalles, setDetalles] = useState({})
  const generos = detalles.generos?.map((obg) => obg.name)
  const listaGeneros = generos?.join("-")

  useEffect(() => {
    getMovieDetails({ id: peliId, lang: idioma }).then((res) =>
      setDetalles(res)
    )
  }, [peliId, idioma])

  return { detalles, listaGeneros }
}
