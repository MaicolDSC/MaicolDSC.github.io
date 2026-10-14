import { useEffect, useState } from 'react'
import { Icono } from './Iconos.jsx'

function temaInicial() {
  const actual = document.documentElement.dataset.theme
  if (actual === 'dark' || actual === 'light') return actual
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const enlaces = [
  { id: 'inicio', texto: 'Inicio', href: '#' },
  { id: 'herramientas', texto: 'Herramientas', href: '#herramientas' },
]

export function Navbar({ pagina }) {
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    try { localStorage.setItem('tema', tema) } catch (e) {}
  }, [tema])

  const oscuro = tema === 'dark'

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#" className="mr-1 font-mono text-lg font-bold tracking-tight text-fg">
            <span className="text-accent">&lt;</span>MS<span className="text-accent">/&gt;</span>
          </a>
          {enlaces.map((e) => (
            <a
              key={e.id}
              href={e.href}
              aria-current={pagina === e.id ? 'page' : undefined}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                pagina === e.id ? 'bg-accent-soft text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {e.texto}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setTema(oscuro ? 'light' : 'dark')}
          aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-card text-fg transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Icono nombre={oscuro ? 'sol' : 'luna'} className="h-[18px] w-[18px]" />
        </button>
      </nav>
    </header>
  )
}
