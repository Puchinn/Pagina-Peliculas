import './App.css'
import { Header } from './componentes/header/Header'
import { IdiomaProvider } from './contexto/IdiomaProvider'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <IdiomaProvider>
      <Header />
      <Outlet />
    </IdiomaProvider>
  )
}

export default App
