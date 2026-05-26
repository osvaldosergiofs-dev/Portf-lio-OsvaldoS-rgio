# Implementation Plan: Portfolio UI Fixes

**Branch**: `002-portfolio-ui-fixes` | **Date**: 2026-05-26 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/002-portfolio-ui-fixes/spec.md`

## Summary

Aplicar quatro ajustes pontuais no portfolio atual preservando o restante da experiência:
resetar o scroll interno dos modais de projeto ao abrir, mover Habilidades para depois de
"DO CÓDIGO AO DEPLOY." e antes de Contato, ajustar navegação por menu com offset baseado no
header e substituir a chamada de Contato por "INTERFACES MODERNAS. SOLUÇÕES REAIS.".

A implementação deve atuar nos pontos já responsáveis pela renderização atual: transformação da
marcação exportada em `src/App.vue`, comportamento interativo em `src/open-design-export.js` e
componentes Vue equivalentes em `src/components/overlays/`. Nenhum estilo, conteúdo, animação ou
componente da seção Habilidades deve ser alterado além da ordem de renderização.

## Technical Context

**Language/Version**: JavaScript (ES2023), Vue 3.5.x, Vite 3.2.x  
**Primary Dependencies**: `vue`, `@vitejs/plugin-vue`, `vite`  
**Storage**: N/A; portfolio estático com assets em `public/portfolio-assets/`  
**Testing**: `npm run build`, validação manual/automatizada em navegador para desktop e mobile,
teste de navegação por âncoras e teste de regressão dos modais  
**Target Platform**: Navegadores modernos desktop/mobile  
**Project Type**: Web application frontend  
**Performance Goals**: Manter metas existentes da landing page: LCP <= 2.5s, CLS <= 0.1,
INP <= 200ms; sem introduzir novas dependências ou mídia  
**Constraints**: Vue 3 + Vite; não refazer layout; não alterar estilos, animações ou conteúdo não
solicitado; sem overflow horizontal; preservar comportamento desktop de Serviços  
**Scale/Scope**: Uma página principal; ajustes em modais, ordem de seções, navegação por menu e
copy de Contato

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Open Design fidelity strategy documented: preservar implementação aprovada e alterar apenas
  os pontos explicitamente solicitados; sem novos tokens, estilos ou reinterpretacões visuais.
- [x] MCP source-of-truth gate passed by existing feature baseline: artefatos exportados
  (`public/portfolio-assets/index.html`, `DESIGN-HANDOFF.md`, `DESIGN-MANIFEST.json`) já estão no
  repositório e a alteração atual não redesenha a referência.
- [x] Vue 3 + Vite stack confirmed; no alternative framework introduced.
- [x] Section order and visual hierarchy lock documented: somente Habilidades muda de posição;
  seus estilos, conteúdo, animações e componentes permanecem iguais.
- [x] Core Web Vitals budgets defined (LCP <= 2.5s, CLS <= 0.1, INP <= 200ms); medir via build e
  inspeção de regressão visual/interativa.
- [x] SEO plan defined: manter metadata, headings e links existentes; nova copy preserva a classe
  e o nível visual do heading de Contato.
- [x] Accessibility plan defined: preservar roles de dialog, foco dos modais, navegação por
  teclado e estado do menu.
- [x] Responsive plan defined: validar mobile e desktop, incluindo menu mobile, exceção de
  Serviços no desktop e ausência de overflow horizontal.
- [x] Component architecture and maintainability rules documented: centralizar correções no
  render/export atual e manter componentes Vue equivalentes coerentes.

**Gate Status (Pre-Design)**: PASS

## Execution Plan

1. Localizar responsabilidades:
   - Projetos/modais: `src/open-design-export.js` e componentes em `src/components/overlays/`.
   - Ordem das seções: transformação de markup em `src/App.vue` e dados de navegação em
     `src/data/portfolio-content.js`.
   - Menu/header e âncoras: listeners em `src/open-design-export.js` e estrutura `.navlinks`.
   - Texto de Contato: heading `#contato-title` no markup exportado e componente equivalente.
2. Corrigir modais:
   - Identificar containers roláveis: `.project-modal__panel`, `.project-modal__copy`,
     `.project-modal__simple` e conteúdo interno.
   - Resetar `scrollTop` e `scrollLeft` sempre que modal abrir.
   - Em componentes com renderização condicional, aguardar atualização do DOM antes do reset.
   - Validar abrindo modal A, rolando até o fim, fechando e abrindo modal B.
3. Reordenar seções:
   - Mover apenas a renderização de Habilidades para depois de Serviços/"DO CÓDIGO AO DEPLOY.".
   - Preservar `id="habilidades"`, `aria-labelledby`, conteúdo e classes.
   - Atualizar a ordem do menu para manter âncoras coerentes.
4. Ajustar scroll do menu:
   - Calcular offset pela altura atual do header.
   - Aplicar offset para todas as opções no mobile.
   - Manter comportamento atual para Serviços no desktop.
   - Permitir ajuste desktop nas demais opções apenas se necessário e sem quebrar comportamento
     existente.
5. Trocar frase:
   - Substituir a frase exata antiga pela nova frase.
   - Preservar classe, hierarquia e visual do texto anterior.
   - Verificar ausência de duplicidade.
6. Verificação:
   - Rodar `npm run build`.
   - Testar navegação por menu em desktop e mobile.
   - Testar modais principais e extras.
   - Validar mobile e desktop sem overflow horizontal.

## Project Structure

### Documentation (this feature)

```text
specs/002-portfolio-ui-fixes/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- ui-behavior-contract.md
|-- checklists/
|   `-- requirements.md
`-- tasks.md              # Created by /speckit.tasks, not by this command
```

### Source Code (repository root)

```text
src/
|-- App.vue                         # Exported markup transformation and section order
|-- open-design-export.js            # Current runtime interactions for menu and modals
|-- data/
|   `-- portfolio-content.js         # Component-era nav order kept consistent
|-- components/
|   |-- overlays/
|   |   |-- ProjectModal.vue
|   |   |-- MoreProjectsModal.vue
|   |   `-- ExtraProjectDetailModal.vue
|   `-- sections/
|       |-- ContactSection.vue
|       `-- SkillsSection.vue
`-- styles/
    `-- app.css                      # Read-only for this feature unless validation finds overflow
```

**Structure Decision**: Manter a arquitetura Vue + Vite existente. Como a página atual renderiza
a exportação Open Design via `v-html`, os ajustes de produção ficam em `App.vue` e
`open-design-export.js`; componentes Vue equivalentes são mantidos consistentes para evitar
regressão futura.

## Phase Outputs

### Phase 0 - Research

- [research.md](./research.md) documenta as decisões para reset de scroll, reordenação sem
  redesign, offset de menu e substituição de copy.

### Phase 1 - Design and Contracts

- [data-model.md](./data-model.md) descreve entidades de UI/estado afetadas.
- [contracts/ui-behavior-contract.md](./contracts/ui-behavior-contract.md) define os contratos
  verificáveis de comportamento.
- [quickstart.md](./quickstart.md) lista o fluxo de build e QA desktop/mobile.

## Post-Design Constitution Check

- [x] Fidelidade visual preservada; mudanças limitadas a comportamento, ordem solicitada e texto.
- [x] Stack Vue + Vite mantida.
- [x] Seção Habilidades preserva classes, conteúdo e animações.
- [x] Validação planejada cobre desktop/mobile, menu, modais e build.
- [x] Nenhuma complexidade constitucional ou dependência nova introduzida.

**Gate Status (Post-Design)**: PASS

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
