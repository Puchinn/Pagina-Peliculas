import { Link } from 'react-router-dom'

export function PeliculaCard({ objPelicula }) {
  return (
    <li>
      <Link to={`/pelicula/${objPelicula.id}`}>
        <img src={objPelicula.posterImg} alt={objPelicula.titulo} width={150} />
        <h4> {objPelicula.titulo} </h4>
      </Link>
    </li>
  )
}
