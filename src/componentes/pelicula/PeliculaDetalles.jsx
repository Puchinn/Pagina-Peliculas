import { useParams } from 'react-router-dom'
import './estilos.css'
import { useEffect, useState } from 'react'
import { getMovieDetails } from '../../servicios/getMovieDetails'
import { useIdiomaContext } from '../../hooks/useIdiomaContext'

export function PeliculaDetalles() {
  const { peliId } = useParams()
  const { idioma } = useIdiomaContext()
  const [detalles, setDetalles] = useState({})

  useEffect(() => {
    getMovieDetails({ id: peliId, lang: idioma }).then((res) =>
      setDetalles(res)
    )
  }, [peliId, idioma])

  return (
    <>
      <section className='peliculas_detalles'>
        <div
          className='fondo'
          style={{
            backgroundImage: `url(${detalles.fondoImg})`,
          }}
        >
          <div className='fondoOscuro'></div>
        </div>
        <div className='detalles'>
          <div className='imagen_poster'>
            <img src={detalles.posterImg} alt={detalles.titulo} />
          </div>
          <div>
            <h1>{detalles.titulo}</h1>
            <p> {detalles.descripcion} </p>
          </div>
        </div>
      </section>
    </>
  )
}
