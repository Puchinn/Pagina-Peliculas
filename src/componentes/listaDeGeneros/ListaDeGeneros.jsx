import { useGeneros } from '../../hooks/useGeneros'
import { Link } from 'react-router-dom'

export function ListaDeGeneros() {
  const { generos } = useGeneros()

  return (
    <div className='generos'>
      <h2>Generos :</h2>
      <ul>
        {generos?.map((gen) => (
          <li key={gen.id}>
            <Link to={`/peliculas/generos/${gen.id}`}>{gen.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
