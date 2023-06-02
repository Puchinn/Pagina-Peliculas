import { Header } from './componentes/header/Header'
import { IdiomaProvider } from './contexto/IdiomaProvider'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

function App() {
  return (
    <IdiomaProvider>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </IdiomaProvider>
  )
}

export default App
