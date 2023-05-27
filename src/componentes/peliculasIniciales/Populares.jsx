import { Link } from 'react-router-dom'
import { PeliculaCard } from '../pelicula/PeliculaCard'

export function Populares({ peliculasPopulares }) {
  return (
    <section className='max-w-6xl mx-auto py-5'>
      <h2 className='text-3xl my-3 text-violet-400 font-semibold'>
        Lo mas Popular
      </h2>
      <div className='p-8 bg-neutral rounded-box'>
        <ul id='scroll' className='w-full overflow-x-auto flex space-x-3 pb-5'>
          {peliculasPopulares?.map((peli) => (
            <div key={peli.id} className='carousel-item'>
              <PeliculaCard objPelicula={peli} />
            </div>
          ))}
        </ul>
        <button className='btn mt-5 bg-base-200 text-white'>
          <Link to={'/peliculas'}>Mas Peliculas</Link>
        </button>
      </div>
    </section>
  )
}
