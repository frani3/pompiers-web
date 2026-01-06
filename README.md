# Tercera Compañía – Landing Page

Este repositorio contiene la landing page oficial de la Tercera Compañía de Bomberos, construida con React 19 + Vite + Tailwind CSS. El sitio presenta hero slider, quick links, grid de especialidades, alianza franco-chilena y la sección inmersiva de la cancha techada en una sola página moderna y responsiva.

## Estructura clave

- `src/main.jsx`: punto de entrada de Vite que monta el componente `LandingPage`.
- `src/components/Navbar.jsx`: navegación fija responsive con iconos de `lucide-react` y menú hamburguesa.
- `src/components/LandingPage.jsx`: layout completo con hero, quick links, grid, alianza y sección de cancha.
- `src/components/Footer.jsx`: pie de página institucional con créditos.
- `src/assets/`: imágenes hero, cancha y logo.

## Scripts

```bash
npm install       # instala dependencias
npm run dev       # levanta el servidor de desarrollo con hot reload
npm run build     # compila el sitio para producción
npm run preview   # sirve el build generado
```

## Principios de diseño

- Tailwind CSS se aplica con utilidades por componente; los contenedores principales respetan `max-w-6xl`/`max-w-7xl` y bordes redondeados para mantener coherencia visual.
- El hero combina un slider de imágenes, gradientes y CTAs en rojo institucional.
- La barra fija cambia su fondo según el scroll o el menú móvil para mantener legibilidad.
- La sección final de la cancha se diseñó como un poster vertical con overlay oscuro y CTA destacado.

## Cómo colaborar

1. Trabaja dentro de `src/components` y mantén los assets en `src/assets`.
2. Usa exclusivamente clases utilitarias de Tailwind para mantener consistencia.
3. Corre `npm run build` antes de abrir un PR para asegurar que compile.

## Notas adicionales

- El sitio es completamente estático; la interactividad vive en componentes React con estado local.
- Para validaciones visuales, ejecuta `npm run dev` y prueba las vistas móviles en las devtools.
