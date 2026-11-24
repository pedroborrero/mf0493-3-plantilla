import { defineConfig } from 'astro/config';

export default defineConfig({
  // En local no hace falta tocar nada.
  // Antes de publicar, sustituye USUARIO y NOMBRE_REPO por tus datos:
  site: 'https://pedroborrero.github.io',
  // Descomenta esta línea con el nombre de tu repositorio
  // (usa '/' si tu repositorio se llama USUARIO.github.io):
  base: '/mf0493-3-plantilla',
  trailingSlash: 'always',
});
