import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { Herramientas } from './components/Herramientas.jsx'
import {
  TarjetaPerfil, TarjetaRedes, TarjetaSpotify, TarjetaUbicacion,
  TarjetaTecnologias, TarjetaProyectos, TarjetaExperiencia,
  TarjetaEducacion, TarjetaCertificados, TarjetaContacto,
} from './components/Tarjetas.jsx'
import { perfil } from './data.js'

// Navegación sencilla con el # de la dirección: #herramientas abre esa página
function paginaActual() {
  return window.location.hash === '#herramientas' ? 'herramientas' : 'inicio'
}

function Inicio() {
  return (
    <main className="mx-auto grid max-w-6xl grid-flow-row-dense grid-cols-1 gap-4 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
      <TarjetaPerfil />
      <TarjetaRedes />
      <TarjetaSpotify />
      <TarjetaUbicacion />
      <TarjetaTecnologias />
      <TarjetaProyectos />
      <TarjetaExperiencia />
      <TarjetaEducacion />
      <TarjetaCertificados />
      <TarjetaContacto />
    </main>
  )
}

export default function App() {
  const [pagina, setPagina] = useState(paginaActual)

  useEffect(() => {
    const cambiar = () => {
      setPagina(paginaActual())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', cambiar)
    return () => window.removeEventListener('hashchange', cambiar)
  }, [])

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar pagina={pagina} />
      {pagina === 'herramientas' ? <Herramientas /> : <Inicio />}
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 pb-10 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} {perfil.nombreCompleto}</span>
        <span>Código limpio, conexiones seguras 🛡️</span>
      </footer>
    </div>
  )
}
