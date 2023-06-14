import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './componentes/footer/Footer'
import { Header } from './componentes/header/Header'
import { ContextProvider } from './contexto/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </ContextProvider>
  )
}

export default App
