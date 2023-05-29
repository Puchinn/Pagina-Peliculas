const { VITE_API_KEY } = import.meta.env
const api = '?api_key=' + VITE_API_KEY
import { imagenes } from "../adaptadores/imagenes"

export async function getImages({ id }) {
  const url = `https://api.themoviedb.org/3/movie/${id}/images`
  const res = await fetch(url + api)
  const json = await res.json()
  const formatedImages = imagenes({ arrayImgs: json.backdrops })
  const sortedImages = formatedImages.sort((a, b) => a.puntuacion - b.puntuacion).filter(img => (
    img.iso === null
  ))
  return sortedImages
}