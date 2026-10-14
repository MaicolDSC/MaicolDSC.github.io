// Contenedor base de cada cuadro del bento
export function Tarjeta({ children, className = '', titulo }) {
  return (
    <section
      className={`rounded-2xl border border-line bg-card p-6 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-colors hover:border-accent/40 ${className}`}
    >
      {titulo && (
        <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {titulo}
        </h2>
      )}
      {children}
    </section>
  )
}
