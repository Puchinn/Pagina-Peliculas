import { idiomaContext } from './idioma'
import { useState } from 'react'

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState('es-MX')
  const updateLanguage = (evento) => {
    setIdioma(evento.target.value)
  }

  return (
    <idiomaContext.Provider value={{ idioma, updateLanguage }}>
      {children}
    </idiomaContext.Provider>
  )
}
