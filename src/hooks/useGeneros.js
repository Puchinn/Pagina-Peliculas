import { useIdiomaContext } from "./useIdiomaContext"
import { getListOfGeners } from "../servicios/getListOfGeners"
import { useEffect, useState } from "react"

export function useGeneros() {
  const { idioma } = useIdiomaContext()
  const [generos, setGeneros] = useState([])

  useEffect(() => {
    getListOfGeners({ lang: idioma })
      .then(res => setGeneros(res))
  }, [idioma])

  return { generos }
}