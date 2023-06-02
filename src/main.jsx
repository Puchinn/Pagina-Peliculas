import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Peliculas from './paginas/paginasDePeliculas/peliculasPorCategoria/Peliculas'
import PeliculaDetalles from './paginas/detallesPeliculas/PeliculaDetalles'

const PaginaTendencias = React.lazy(() =>
  import('./paginas/paginasDePeliculas/tendencias/PaginaTendencias')
)
const PaginaGeneros = React.lazy(() =>
  import('./paginas/paginasDePeliculas/generos/PaginaGeneros')
)
const ResultadoBusqueda = React.lazy(() =>
  import('./paginas/resultadoBusqueda/ResultadoBusqueda')
)
const NotFound = React.lazy(() => import('./paginas/not-found/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: '/peliculas/:query?/page?/:page?',
        element: <Peliculas />,
      },
      {
        path: '/peliculas/tendencias/:query?/page?/:page?',
        element: <PaginaTendencias />,
      },
      {
        path: '/peliculas/generos/:query?/page?/:page?',
        element: <PaginaGeneros />,
      },
      {
        path: '/pelicula/:peliId',
        element: <PeliculaDetalles />,
      },
      {
        path: '/busqueda/page?/:page?',
        element: <ResultadoBusqueda />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
