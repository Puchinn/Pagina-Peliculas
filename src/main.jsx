import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Inicio } from './paginas/Inicio.jsx'
import { PaginaTendencias } from './paginas/paginasDePeliculas/tendencias/PaginaTendencias'
import { PaginaGeneros } from './paginas/paginasDePeliculas/generos/PaginaGeneros.jsx'
import { Peliculas } from './paginas/paginasDePeliculas/peliculasPorCategoria/Peliculas'
import { PeliculaDetalles } from './paginas/detallesPeliculas/PeliculaDetalles.jsx'
import { ResultadoBusqueda } from './paginas/resultadoBusqueda/ResultadoBusqueda.jsx'
import { NotFound } from './paginas/not-found/NotFound'

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
