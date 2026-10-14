import { useEffect, useState } from 'react'
import { Tarjeta } from './Tarjeta.jsx'
import { Icono } from './Iconos.jsx'
import { perfil, redes, tecnologias, proyectos, experiencia, educacion, certificados } from '../data.js'

export function TarjetaPerfil() {
  const iniciales = perfil.nombreCompleto.split(' ').filter((_, i) => i === 0 || i === 2).map((p) => p[0]).join('')
  return (
    <Tarjeta className="flex flex-col items-center justify-center gap-5 text-center md:col-span-2 lg:row-span-2">
      {perfil.foto ? (
        <img src={perfil.foto} alt={perfil.nombreCompleto} className="h-48 w-48 rounded-full object-cover ring-4 ring-accent-soft" />
      ) : (
        <div className="relative grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-accent to-sky-700 ring-8 ring-accent-soft">
          <span className="text-6xl font-extrabold tracking-tighter text-white">{iniciales}</span>
          <span className="absolute -bottom-1 -right-1 grid h-12 w-12 place-items-center rounded-full border-4 border-bg bg-card-2 text-accent">
            <Icono nombre="escudo" className="h-6 w-6" />
          </span>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-extrabold tracking-tight text-fg md:text-5xl">
          Hola <span className="saludo inline-block origin-[70%_70%]">👋</span> soy {perfil.nombre}
        </h1>
        <p className="text-xl font-medium text-accent">{perfil.rol}</p>
      </div>
      <p className="max-w-md text-[15px] leading-relaxed text-muted">{perfil.bio}</p>
    </Tarjeta>
  )
}

export function TarjetaRedes() {
  return (
    <Tarjeta className="flex flex-col items-center justify-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">Encuéntrame en</p>
      <div className="flex flex-wrap justify-center gap-3">
        {redes.map((r) => (
          <a
            key={r.nombre}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={r.nombre}
            title={r.nombre}
            className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-card-2 text-fg transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icono nombre={r.icono} />
          </a>
        ))}
      </div>
    </Tarjeta>
  )
}

export function TarjetaSpotify() {
  const [cancion, setCancion] = useState(null)

  useEffect(() => {
    if (!perfil.discordId) return
    let activo = true
    const consultar = () =>
      fetch(`https://api.lanyard.rest/v1/users/${perfil.discordId}`)
        .then((r) => r.json())
        .then((json) => {
          if (!activo) return
          const d = json && json.data
          setCancion(d && d.listening_to_spotify ? d.spotify : null)
        })
        .catch(() => activo && setCancion(null))
    consultar()
    const id = setInterval(consultar, 30000)
    return () => { activo = false; clearInterval(id) }
  }, [])

  if (!cancion) {
    return (
      <Tarjeta className="flex flex-col items-center justify-center gap-3 text-center">
        <span className="text-[#1DB954]"><Icono nombre="spotify" className="h-10 w-10" /></span>
        <p className="text-[15px] text-muted">No estoy escuchando música ahora</p>
      </Tarjeta>
    )
  }

  return (
    <Tarjeta className="flex flex-col justify-center gap-3">
      <div className="flex items-center gap-2 text-xs font-medium text-[#1DB954]">
        <Icono nombre="spotify" className="h-4 w-4" />
        Escuchando ahora
        <span className="ml-auto flex h-3 items-end gap-0.5" aria-hidden="true">
          {[0, 0.2, 0.4].map((d) => (
            <span key={d} className="barra block h-3 w-0.5 bg-[#1DB954]" style={{ animationDelay: `${d}s` }} />
          ))}
        </span>
      </div>
      <a
        href={`https://open.spotify.com/track/${cancion.track_id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl p-1 transition hover:bg-card-2"
      >
        <img src={cancion.album_art_url} alt={cancion.album} className="h-14 w-14 rounded-lg" />
        <div className="min-w-0">
          <p className="truncate font-semibold text-fg">{cancion.song}</p>
          <p className="truncate text-sm text-muted">{cancion.artist}</p>
        </div>
      </a>
    </Tarjeta>
  )
}

export function TarjetaUbicacion() {
  const formato = () =>
    new Intl.DateTimeFormat('es-CO', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: perfil.zonaHoraria }).format(new Date())
  const [hora, setHora] = useState(formato)

  useEffect(() => {
    const id = setInterval(() => setHora(formato()), 15000)
    return () => clearInterval(id)
  }, [])

  return (
    <Tarjeta className="flex flex-col items-center justify-center gap-4 md:col-span-2">
      <div className="flex items-center gap-3">
        <span className="font-mono text-lg font-bold text-fg">CO</span>
        <div>
          <p className="text-lg font-semibold text-fg">{perfil.ciudad}, Colombia</p>
          <p className="text-sm text-muted">
            <span className="tabular-nums">{hora}</span> · {perfil.modalidad}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
        <span className="flex items-center gap-2 text-fg">
          <span className="pulso h-2 w-2 rounded-full bg-ok" />
          Abierto a oportunidades
        </span>
        <span className="hidden h-4 w-px bg-line sm:block" />
        <span className="font-medium text-accent" title={`Matrícula ${perfil.matricula}`}>Matrícula profesional COPNIA</span>
      </div>
      <p className="font-mono text-xs text-muted">{perfil.matricula}</p>
    </Tarjeta>
  )
}

export function TarjetaTecnologias() {
  return (
    <Tarjeta titulo="Tecnologías">
      <ul className="flex flex-wrap gap-2">
        {tecnologias.map((t) => (
          <li key={t} className="rounded-lg border border-line bg-card-2 px-2.5 py-1 text-[13px] text-fg">
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">Idiomas</p>
      <ul className="flex flex-wrap gap-2">
        {perfil.idiomas.map((i) => (
          <li key={i} className="rounded-lg bg-accent-soft px-2.5 py-1 text-[13px] font-medium text-accent">{i}</li>
        ))}
      </ul>
    </Tarjeta>
  )
}

export function TarjetaProyectos() {
  return (
    <Tarjeta titulo="Proyectos" className="md:col-span-2">
      <div className="grid gap-3 sm:grid-cols-2">
        {proyectos.map((p) => {
          const contenido = (
            <>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-fg">{p.titulo}</h3>
                {p.url && <Icono nombre="flecha" className="h-4 w-4 shrink-0 text-muted transition group-hover:text-accent" />}
              </div>
              <p className="text-sm text-muted">{p.descripcion}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {p.etiquetas.map((e) => (
                  <span key={e} className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">{e}</span>
                ))}
              </div>
            </>
          )
          const clase = 'group flex flex-col gap-2 rounded-xl border border-line bg-card-2/60 p-4 transition'
          return p.url ? (
            <a key={p.titulo} href={p.url} target="_blank" rel="noopener noreferrer" className={`${clase} hover:border-accent/60`}>
              {contenido}
            </a>
          ) : (
            <div key={p.titulo} className={clase}>{contenido}</div>
          )
        })}
      </div>
    </Tarjeta>
  )
}

function Linea({ items }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((it, i) => (
        <li key={i} className={`border-l-2 pl-3 ${i === 0 ? 'border-accent' : 'border-line'}`}>
          <div className="flex items-start justify-between gap-2">
            <p className="font-semibold leading-snug text-fg">{it.titulo}</p>
            {it.actual && (
              <span className="shrink-0 rounded-full bg-ok/15 px-2 py-0.5 text-[11px] font-medium text-ok">Ahora</span>
            )}
          </div>
          <p className="text-sm text-muted">{it.lugar}</p>
          {[].concat(it.fecha || []).map((f) => (
            <p key={f} className="font-mono text-xs text-muted/80 tabular-nums">{f}</p>
          ))}
          {it.descripcion && <p className="mt-2 text-[13px] leading-snug text-muted">{it.descripcion}</p>}        </li>
      ))}
    </ol>
  )
}

export function TarjetaExperiencia() {
  return (
    <Tarjeta titulo="Experiencia">
      <Linea items={experiencia.map((e) => ({ titulo: e.cargo, lugar: e.lugar, fecha: e.fecha, descripcion: e.descripcion }))} />
    </Tarjeta>
  )
}

export function TarjetaEducacion() {
  return (
    <Tarjeta titulo="Educación">
      <Linea items={educacion} />
    </Tarjeta>
  )
}

export function TarjetaCertificados() {
  return (
    <Tarjeta titulo="Certificados" className="md:col-span-2">
      <ul className="grid gap-3 sm:grid-cols-2">
        {certificados.map((c) => (
          <li key={c.nombre} className="flex flex-col rounded-xl border border-line bg-card-2/60 p-4">
            <span className="font-semibold text-fg">{c.nombre}</span>
            <span className="text-sm text-muted">{c.entidad} · <span className="font-mono text-xs">{c.fecha}</span></span>
          </li>
        ))}
      </ul>
    </Tarjeta>
  )
}

export function TarjetaContacto() {
  const [copiado, setCopiado] = useState(false)

  const copiar = () => {
    const listo = () => { setCopiado(true); setTimeout(() => setCopiado(false), 1800) }
    try {
      navigator.clipboard.writeText(perfil.correo).then(listo, () => {})
    } catch (e) {}
  }

  return (
    <Tarjeta className="flex flex-col items-center justify-center gap-3 text-center">
      <span className="text-accent"><Icono nombre="mail" className="h-8 w-8" /></span>
      <p className="text-lg font-semibold text-fg">¿Trabajamos juntos?</p>
      <p className="select-all break-all font-mono text-xs text-muted">{perfil.correo}</p>
      <button
        type="button"
        onClick={copiar}
        className="mt-1 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Icono nombre={copiado ? 'check' : 'copiar'} className="h-4 w-4" />
        {copiado ? 'Correo copiado' : 'Copiar correo'}
      </button>
    </Tarjeta>
  )
}
