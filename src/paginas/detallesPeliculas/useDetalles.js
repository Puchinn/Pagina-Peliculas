import { useParams } from 'react-router-dom'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'
import { getMovieDetails } from '../../servicios/getMovieDetails'
import { formatedHours } from '../../utils/formatedHours'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { getCredits } from '../../servicios/getCredits'
import { useLocation } from 'react-router-dom'
import { getVideo } from '../../servicios/getVideo'

export function useDetalles() {
  const { pathname } = useLocation()
  const { peliId } = useParams()
  const { idioma } = useIdiomaContext()
  const { data, isLoading } = useSWR([idioma, peliId], () => (
    getMovieDetails({ id: peliId, lang: idioma })
  ))

  const [equipo, setEquipo] = useState([])
  const [key, setKey] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    getCredits({ movieId: peliId, lang: idioma }, controller)
      .then(res => setEquipo(res))
    getVideo({ id: peliId, lang: idioma })
      .then(res => setKey(res[0]))
    return () => controller.abort()
  }, [peliId, idioma, pathname])


  const generos = data && data.generos?.map((obg) => obg.name)
  const listaGeneros = generos?.join("-")
  const hora = data && formatedHours({ minutos: data.duracion })
  const fecha = data && data.lanzamiento?.split('-').reverse().join('-')

  return { detalles: data, listaGeneros, hora, fecha, isLoading, equipo, key }
}
