import { idiomaContext } from './idioma'
import { useState, useEffect } from 'react'
import { getListOfGeners } from '../servicios/getListOfGeners'

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState('es-MX')
  const [generos, setGeneros] = useState([])
  const updateLanguage = (evento) => {
    setIdioma(evento.target.value)
  }

  useEffect(() => {
    getListOfGeners({ lang: idioma }).then((res) => setGeneros(res))
  }, [idioma])

  return (
    <idiomaContext.Provider value={{ idioma, updateLanguage, generos }}>
      {children}
    </idiomaContext.Provider>
  )
}
