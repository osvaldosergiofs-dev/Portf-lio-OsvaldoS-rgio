# Portfólio Osvaldo Sérgio

Landing page estática em Vue 3 + Vite 3, preparada para deploy no GitHub Pages.

## Requisitos

- Node.js 16 ou superior
- npm

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

O projeto está configurado em `vite.config.js` com:

```js
base: '/meu-portifolio/'
```

Se o repositório no GitHub tiver outro nome, ajuste esse valor para `/<nome-do-repositorio>/`.
Para publicar, gere `dist/` com `npm run build` e configure o GitHub Pages para servir o conteúdo gerado.
