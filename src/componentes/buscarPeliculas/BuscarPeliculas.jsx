import './buscarPeliculas.css'
import { Form } from 'react-router-dom'

export function BuscarPeliculas() {
  return (
    <section className='buscarPeliculas'>
      <div className=''>
        <h1 className='buscar_titulo'>Buscar Peliculas</h1>
        <p className=''>Alguna buena descripcion</p>
      </div>
      <Form action='/busqueda' className='formularioBuscar'>
        <input
          className='buscar_input'
          type='text'
          name='query'
          placeholder='Buscar pelicula'
          required
        />
        <button className='buscar_boton'>Buscar</button>
      </Form>
    </section>
  )
}
