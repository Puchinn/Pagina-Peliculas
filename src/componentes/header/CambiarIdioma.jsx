import { useIdiomaContext } from '../../hooks/useIdiomaContext'

export function CambiarIdioma() {
  const { idioma, updateLanguage } = useIdiomaContext()

  return (
    <div>
      <select
        className='select w-full max-w-xs'
        value={idioma}
        onChange={updateLanguage}
      >
        <option value='es-MX'>Español</option>
        <option value='en-US'>Ingles</option>
        <option value='pt-BR'>Portugues</option>
      </select>
    </div>
  )
}
