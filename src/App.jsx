import { Header } from './componentes/header/Header'
import { IdiomaProvider } from './contexto/IdiomaProvider'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Footer } from './componentes/footer/Footer'

function App() {
  return (
    <IdiomaProvider>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </IdiomaProvider>
  )
}

export default App
