import { PeliculasIniciales } from './componentes/peliculasIniciales/PeliculasIniciales'
import { BuscarPeliculas } from './componentes/buscarPeliculas/BuscarPeliculas'
import { PeliculaDelDia } from './componentes/peliculaDelDia/PeliculaDelDia'

export default function Inicio() {
  return (
    <>
      <PeliculaDelDia />
      <BuscarPeliculas />
      <PeliculasIniciales />
    </>
  )
}
