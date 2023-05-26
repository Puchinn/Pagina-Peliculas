import { useContext } from 'react'
import { idiomaContext } from '../contexto/idioma'

export function useIdiomaContext() {
  const { idioma, updateLanguage, generos } = useContext(idiomaContext)

  return { idioma, updateLanguage, generos }
}