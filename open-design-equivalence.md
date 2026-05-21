# Open Design Equivalence Checklist

Fonte de verdade: MCP Open Design `Portifólio__PRO`

Arquivos revalidados via MCP:

- [x] `index.html`
- [x] `DESIGN-HANDOFF.md`
- [x] `DESIGN-MANIFEST.json`

## Checklist

- [x] Branch `codex/fidelity-fix-open-design` criada
- [x] Assets oficiais copiados para `public/portfolio-assets`
- [x] Referências `/portfolio-assets/...` validadas sem arquivos ausentes
- [x] `index.html` oficial preservado em `public/portfolio-assets/index.html`
- [x] CSS oficial portado para `resources/css/app.css`
- [x] Markup oficial portado para Vue em `resources/js/open-design-export.js`
- [x] Runtime/interações oficiais encapsulados em Vue
- [x] SEO base alinhado ao export
- [x] Open Graph aponta para asset oficial
- [x] Twitter image aponta para asset oficial
- [x] Theme bootstrap executa antes do mount
- [x] TopBar/Header equivalente
- [x] Hero equivalente
- [x] About equivalente
- [x] Skills equivalente com 6 categorias
- [x] Skills com ícones SVG/masks do export
- [x] Projects equivalente
- [x] Project cards com assets oficiais
- [x] ProjectModal equivalente
- [x] ProjectModal com backgrounds decorativos
- [x] MoreProjectsModal equivalente
- [x] ExtraProjectDetailModal equivalente
- [x] Detail Drawer presente
- [x] Services equivalente
- [x] Contact equivalente
- [x] Footer equivalente
- [x] Body orbs/grid/scan layers portados
- [x] Tokens de tema portados
- [x] Gradientes e superfícies portados
- [x] Mouse spotlight presente
- [x] Custom cursor e estados presentes
- [x] Reveal on scroll presente
- [x] Transição de tema com `startViewTransition` presente
- [x] Estados hover/focus/open/close portados
- [x] Breakpoints `1040/760/420` portados do export
- [x] Viewport `360x800` validado
- [x] Viewport `390x844` validado
- [x] Viewport `430x932` validado
- [x] Viewport `600x960` validado
- [x] Viewport `820x1180` validado
- [x] Viewport `1024x768` validado
- [x] Viewport `1366x768` validado
- [x] Viewport `1440x900` validado
- [x] Viewport `1920x1080` validado

Resultado: 44/44.

## Evidencias

- `npm run build` aprovado.
- Comparacao screenshot app vs `public/portfolio-assets/index.html` em modo `prefers-reduced-motion: reduce`.
- Diferenca visual estatica:
  - `360x800`: 0 pixels
  - `390x844`: 0 pixels
  - `430x932`: 0 pixels
  - `600x960`: 0 pixels
  - `820x1180`: 50 pixels (0.0052%)
  - `1024x768`: 50 pixels (0.0064%)
  - `1366x768`: 50 pixels (0.0048%)
  - `1440x900`: 50 pixels (0.0039%)
  - `1920x1080`: 50 pixels (0.0024%)

As diferencas residuais de 50 pixels nos viewports maiores ficam concentradas no avatar do header durante rasterizacao headless e nao alteram estrutura, proporcao, copy, cor, espacamento ou composicao.
