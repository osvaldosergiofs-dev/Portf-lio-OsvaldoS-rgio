# Implementation Plan: Landing page de portfolio com fidelidade ao Open Design

**Branch**: `001-portfolio-landing-page` | **Date**: 2026-05-20 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-portfolio-landing-page/spec.md`

## Summary

Implementar uma landing page de portfolio em Vue 3 + Vite com equivalencia visual e estrutural
ao projeto Open Design `Portifolio__PRO`, respeitando os artefatos obrigatorios
(`index.html`, `DESIGN-HANDOFF.md`, `DESIGN-MANIFEST.json`), sem reinterpretacao de layout
e com validacao final por checklist de fidelidade secao por secao.

## Technical Context

**Language/Version**: JavaScript (ES2023), Vue 3.5.x (SFC), Vite 8.x  
**Primary Dependencies**: `vue`, `@vitejs/plugin-vue`, `vite`, `laravel-vite-plugin`  
**Storage**: N/A (conteudo estatico + assets em `public/portfolio-assets/`)  
**Testing**: QA visual comparativa, auditoria Lighthouse, validacao teclado/foco e checklist de fidelidade  
**Target Platform**: Navegadores modernos desktop/mobile  
**Project Type**: Web application (frontend Vue com build Vite no repositorio atual)  
**Performance Goals**: LCP <= 2.5s, CLS <= 0.1, INP <= 200ms  
**Constraints**: Vue 3 + Vite obrigatorios; sem overflow horizontal; sem alterar ordem/copy/layout do design  
**Scale/Scope**: 1 pagina principal; secoes: hero, sobre, habilidades, projetos, servicos, contato

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Open Design fidelity strategy documented (source frames, token extraction, spacing/type mapping).
- [ ] MCP source-of-truth gate passed: `Portifolio__PRO` read via MCP with `index.html`, `DESIGN-HANDOFF.md`, and `DESIGN-MANIFEST.json` reviewed before coding.
- [x] Vue 3 + Vite stack confirmed; no alternative framework introduced.
- [x] Section order and visual hierarchy lock documented; no reinterpretation allowed without source evidence.
- [x] Core Web Vitals budgets defined (LCP, CLS, INP) with measurement method.
- [x] SEO plan defined (title/description, Open Graph, semantic heading structure, alt text coverage).
- [x] Accessibility plan defined (visible focus, keyboard navigation, semantic landmarks, contrast checks).
- [x] Responsive plan defined for mobile/tablet/desktop with explicit no-horizontal-overflow validation.
- [x] Component architecture and maintainability rules documented (responsibility boundaries and reuse strategy).

**Gate Status (Pre-Design)**: CONDITIONAL PASS (bloqueado no gate MCP em execucao atual)

## Mandatory Gates (User-Defined)

### Gate 1 - Conexao MCP

**Objetivo**: Confirmar acesso ao Open Design e ao projeto `Portifolio__PRO`.  
**Verificacao executada**:
- `mcp__open_design__.list_projects` retornou erro:
  `cannot reach the Open Design daemon at http://127.0.0.1:7456`.

**Status**: BLOCKED  
**Acao para desbloquear**: iniciar daemon Open Design e repetir verificacao antes de continuar.

### Gate 2 - Leitura da Verdade

**Objetivo**: Ler `index.html`, `DESIGN-HANDOFF.md`, `DESIGN-MANIFEST.json` e extrair secoes,
tokens e assets.

**Status atual**: PENDING (depende do Gate 1).

**Mapa de referencia ja documentado no repositorio (a revalidar via MCP ao desbloquear)**:
- Secoes: hero, sobre, habilidades, projetos, servicos, contato.
- Tokens principais: `#020605`, `#252525`, `#e0e0e0`, `#b6b6b6`, `#ffffff`, `#a6a6a6`;
  fontes `Aptos Display`, `Aptos`, `Cascadia Code`.
- Assets esperados:
  - Imagens: `header-avatar.png`, `mpcs2ess-image.png`, `mpcs2j9k-image.png`,
    `mpcs2m4u-image.png`, `video-reference-thumbnail.png`
  - Videos: `mpcsmkxw-Video-Project-AGENDA.mp4`,
    `mpcszrsq-Video-Project-VOUCHERX.mp4`, `mpct34x6-Video-Project-GHS.mp4`
  - Documento: `OSVALDO-SERGIO-CURRICULO.pdf`

### Gate 3 - Arquitetura Vue

**Objetivo**: Definir componentes por secao mantendo ordem e estrutura originais.  
**Status**: READY

Mapeamento secao -> componente:
- Header/Nav -> `resources/js/components/layout/TopBar.vue`
- Hero -> `resources/js/components/sections/HeroSection.vue`
- Sobre -> `resources/js/components/sections/AboutSection.vue`
- Habilidades -> `resources/js/components/sections/SkillsSection.vue`
- Projetos -> `resources/js/components/sections/ProjectsSection.vue`
- Servicos -> `resources/js/components/sections/ServicesSection.vue`
- Contato -> `resources/js/components/sections/ContactSection.vue`
- Footer -> `resources/js/components/layout/FooterBar.vue`
- Overlays de projeto -> `resources/js/components/overlays/*.vue`

### Gate 4 - Implementacao Fiel

**Objetivo**: Reproduzir layout e estilos 1:1.  
**Status**: IN PROGRESS (pendente revalidacao MCP ativa)

Regras de execucao:
- Nao alterar ordem de secoes, copy, tipografia, espacamento, cores, bordas, sombras.
- Nao criar melhorias visuais nao evidenciadas no design.
- Em conflito de artefatos: `index.html` > `DESIGN-MANIFEST.json` > `DESIGN-HANDOFF.md`.

### Gate 5 - QA Visual

**Objetivo**: Revisar desktop/tablet/mobile comparando com design de origem.  
**Status**: PENDING

Matriz minima:
- Mobile: 360x800, 390x844, 430x932
- Tablet: 600x960, 820x1180, 1024x768
- Desktop: 1366x768, 1440x900, 1920x1080

Criticos:
- Sem overflow horizontal.
- Equivalencia visual secao por secao.
- Estados interativos equivalentes (hover/focus/active/modais).

### Gate 6 - Entrega

**Objetivo**: Entregar lista de arquivos alterados e checklist de fidelidade.  
**Status**: PENDING

Artefato de validacao obrigatorio:
- `specs/001-portfolio-landing-page/checklists/open-design-equivalence.md`

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-landing-page/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   |-- ui-surface-contract.md
|   `-- seo-semantic-contract.md
|-- tasks.md
`-- checklists/
    |-- requirements.md
    `-- open-design-equivalence.md
```

### Source Code (repository root)

```text
resources/
|-- js/
|   |-- app.js
|   |-- App.vue
|   |-- components/
|   |   |-- layout/
|   |   |-- sections/
|   |   `-- overlays/
|   |-- composables/
|   `-- data/
`-- css/
    |-- app.css
    |-- tokens.css
    |-- layout.css
    `-- sections/

public/
`-- portfolio-assets/
    |-- images/
    `-- video/
```

**Structure Decision**: manter estrutura Vue SFC por secao/componente com CSS modular por dominio.

## Phase Outputs

### Phase 0 - Research
- `research.md` consolidado com decisoes de fidelidade, midia, SEO, acessibilidade e responsividade.

### Phase 1 - Design and Contracts
- `data-model.md` com entidades de conteudo/UI.
- `contracts/ui-surface-contract.md`.
- `contracts/seo-semantic-contract.md`.
- `quickstart.md` com fluxo de validacao.

## Risks and Blockers

1. MCP Open Design indisponivel no momento da execucao do plano.
2. Sem Gate 1 aprovado em tempo de execucao, Gate 2 nao pode ser fechado formalmente.

## Unblock Actions

1. Subir daemon Open Design e repetir `list_projects`.
2. Ler os 3 arquivos obrigatorios via MCP.
3. Registrar evidencia no checklist de equivalencia e atualizar status dos gates para PASS.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
