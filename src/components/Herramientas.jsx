import { herramientas } from '../data.js'

// Página "Herramientas": hardware y software que uso a diario
export function Herramientas() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-fg md:text-5xl">Herramientas</h1>
      <p className="mt-2 text-lg text-muted">El hardware y el software que uso a diario.</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {herramientas.map((grupo) => (
          <section
            key={grupo.categoria}
            className="rounded-2xl border border-line bg-card p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
          >
            <h2 className="mb-5 flex items-center gap-3 text-xl font-bold text-fg">
              <span aria-hidden="true">{grupo.icono}</span>
              {grupo.categoria}
            </h2>
            <ul className="flex flex-col gap-4">
              {grupo.items.map((it) => (
                <li key={it.nombre} className="border-l-2 border-line pl-3 transition-colors hover:border-accent">
                  <p className="font-semibold text-fg">{it.nombre}</p>
                  <p className="text-sm text-muted">{it.detalle}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
