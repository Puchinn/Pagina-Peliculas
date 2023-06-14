import { useEffect, useState } from 'react'
import { getListOfGeners } from '../servicios/getListOfGeners'
import { dataContext } from './data'

export function ContextProvider({ children }) {
  const [idioma, setIdioma] = useState('es-MX')
  const [generos, setGeneros] = useState([])
  const updateLanguage = (evento) => {
    setIdioma(evento.target.value)
  }

  useEffect(() => {
    getListOfGeners({ lang: idioma }).then((res) => setGeneros(res))
  }, [idioma])

  return (
    <dataContext.Provider value={{ idioma, updateLanguage, generos }}>
      {children}
    </dataContext.Provider>
  )
}
