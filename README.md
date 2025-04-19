# Proyecto Cloudflare Pages con Captura de fbclid

Este proyecto muestra cómo capturar el parámetro `fbclid` en un WebView (Instagram/Facebook) usando **Cloudflare Pages Functions**.

## Estructura de archivos

```
/
├── index.html
└── functions
    └── _middleware.js
```

- **index.html**: Página estática que redirige a WhatsApp usando el `fbclid` guardado en la cookie.
- **functions/_middleware.js**: Middleware que se ejecuta edge-side, captura `fbclid` de la URL y lo guarda en una cookie.

## Pasos para desplegar

1. Crea un repositorio en GitHub/GitLab/Bitbucket con estos archivos.
2. En tu dashboard de Cloudflare, ve a **Pages** y conecta el repositorio.
3. Usa la rama principal (main/master) y configura sin build command (pues es solo archivos estáticos y funciones).
4. Deploy: Cloudflare ejecutará el middleware en cada request, guardará el `fbclid` y servirá `index.html`.
5. Al abrir la URL del sitio con un parámetro `fbclid`, este se guardará en la cookie y luego tu script lo leerá y redirigirá a WhatsApp.

¡Listo para usar!
