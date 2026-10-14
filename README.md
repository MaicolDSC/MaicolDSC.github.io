# Portafolio de Maicol Siachoque

Sitio personal hecho con **React**, **Tailwind CSS v4** y **Vite**. Diseño en cuadrícula de tarjetas (bento), modo claro y oscuro, hora local en vivo y tarjeta de Spotify.

## Ejecutarlo en tu computador

Necesitas [Node.js](https://nodejs.org) 20.19 o superior.

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (normalmente http://localhost:5173).

## Cambiar tu información

Todo está en `src/data.js`: nombre, biografía, redes, tecnologías, proyectos, experiencia, educación y certificados.

- **Foto:** copia tu imagen en `public/` (por ejemplo `public/foto.png`) y en `data.js` pon `foto: 'foto.png'`.
- **LinkedIn:** reemplaza `https://www.linkedin.com/` por el enlace de tu perfil.

## Estructura

```
src/
  data.js                 ← tus datos
  index.css               ← colores, tipografías y fondo de puntos
  App.jsx                 ← la cuadrícula de tarjetas
  components/
    Navbar.jsx            ← barra superior y botón de modo claro/oscuro
    Tarjeta.jsx           ← contenedor base de cada tarjeta
    Tarjetas.jsx          ← cada tarjeta (perfil, Spotify, proyectos...)
    Herramientas.jsx      ← la página Herramientas (#herramientas)
    Iconos.jsx            ← íconos SVG
```

## Cómo funciona el modo claro/oscuro

El botón cambia el atributo `data-theme` de `<html>` entre `light` y `dark`. En `index.css` los colores son variables CSS que cambian según ese atributo, y Tailwind las usa con clases como `bg-card` o `text-accent`. La elección se guarda en `localStorage`.

## Activar la tarjeta de Spotify

Usa [Lanyard](https://github.com/Phineas/lanyard), un servicio gratuito que lee tu estado de Discord.

1. Conecta Spotify en Discord: *Ajustes de usuario → Conexiones → Spotify*, y activa "Mostrar en el perfil".
2. Únete al servidor de Discord de Lanyard (el enlace está en su página de GitHub). Esto activa el seguimiento de tu cuenta.
3. Copia tu ID de usuario de Discord: activa *Ajustes → Avanzado → Modo desarrollador*, luego clic derecho en tu nombre → *Copiar ID de usuario*.
4. Pégalo en `src/data.js`, en `discordId`.

Cuando estés escuchando algo, la tarjeta mostrará la canción, el artista y la portada. Si no, dirá "No estoy escuchando música ahora".

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub. Si lo llamas **`MaicolDSC.github.io`**, tu sitio quedará en `https://maicoldsc.github.io`.
2. Sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primer portafolio"
   git branch -M main
   git remote add origin https://github.com/MaicolDSC/MaicolDSC.github.io.git
   git push -u origin main
   ```
3. En GitHub, ve a *Settings → Pages* y en **Source** elige **GitHub Actions**.
4. El archivo `.github/workflows/deploy.yml` construye y publica el sitio solo, cada vez que haces `git push`.
