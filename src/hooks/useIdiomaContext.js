import { useContext } from 'react'
import { idiomaContext } from '../contexto/idioma'

export function useIdiomaContext() {
  const { idioma, updateLanguage } = useContext(idiomaContext)

  return { idioma, updateLanguage }
}