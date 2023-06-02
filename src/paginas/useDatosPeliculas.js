// import { useParams } from "react-router-dom"
// import { useState, useEffect, useRef } from "react"
// import { useIdiomaContext } from "../hooks/useIdiomaContext"

// const TITULOS = {
//   populares: 'Populares',
//   en_vivo: 'En Vivo',
//   estrenos: 'Estrenos',
//   mas_valoradas: 'Mas Valoradas',
//   del_dia: 'Del dia',
//   de_la_semana: 'De la semana'
// }
// const VALORES = {
//   populares: 'popular',
//   en_vivo: 'now_playing',
//   estrenos: 'upcoming',
//   mas_valoradas: 'top_rated',
//   del_dia: 'day',
//   de_la_semana: 'week'
// }

// export function useDatosPeliculas({ urlParam = '' }) {
//   const [peliculas, setPeliculas] = useState([])
//   const { idioma } = useIdiomaContext()
//   const { query, page = 1 } = useParams()
//   const url = `/peliculas/${urlParam}/${query}`
//   const titulo = TITULOS[query]



//   return { titulo, peliculas, url }
// }
