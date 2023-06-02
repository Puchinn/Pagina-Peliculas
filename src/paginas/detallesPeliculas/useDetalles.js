import { useParams } from 'react-router-dom'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'
import { getMovieDetails } from '../../servicios/getMovieDetails'
import { formatedHours } from '../../utils/formatedHours'
import useSWR from 'swr'

export function useDetalles() {
  const { peliId } = useParams()
  const { idioma } = useIdiomaContext()
  const { data, isLoading } = useSWR([peliId, idioma], () => (
    getMovieDetails({ id: peliId, lang: idioma })
  ))

  const generos = data && data.generos?.map((obg) => obg.name)
  const listaGeneros = generos?.join("-")
  const hora = data && formatedHours({ minutos: data.duracion })
  const fecha = data && data.lanzamiento?.split('-').reverse().join('-')

  return { detalles: data, listaGeneros, hora, fecha, isLoading }
}
