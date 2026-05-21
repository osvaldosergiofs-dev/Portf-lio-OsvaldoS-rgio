---

description: "Task list for implementing the portfolio landing page with strict Open Design fidelity"
---

# Tasks: Landing page de portfolio com fidelidade ao Open Design

**Input**: Design documents from `/specs/001-portfolio-landing-page/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Sem TDD obrigatorio; validacoes finais sao visuais, responsivas, SEO e acessibilidade.

**Organization**: Tarefas agrupadas por fase e user story para entrega incremental e verificavel.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Pode rodar em paralelo (arquivos diferentes, sem dependencia direta)
- **[Story]**: Label da user story (`[US1]`, `[US2]`, `[US3]`)
- Todas as tarefas incluem caminho de arquivo/diretorio explicito

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Fechar gates de fonte de verdade e preparar evidencias de referencia

- [X] T001 Confirmar MCP Open Design ativo e registrar evidencias em `specs/001-portfolio-landing-page/implementation-notes.md`
- [X] T002 Confirmar projeto correto `Portifolio__PRO` e registrar identificacao em `specs/001-portfolio-landing-page/implementation-notes.md`
- [X] T003 Ler `index.html`, `DESIGN-HANDOFF.md` e `DESIGN-MANIFEST.json` via MCP e registrar leitura em `specs/001-portfolio-landing-page/implementation-notes.md`
- [X] T004 [P] Atualizar inventario de assets oficiais em `public/portfolio-assets/ASSET-CHECKLIST.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Definir mapa estrutural e base de fidelidade antes de ajustes visuais finais

- [X] T005 Mapear secoes oficiais para componentes Vue em `specs/001-portfolio-landing-page/implementation-notes.md` e `resources/js/App.vue`
- [X] T006 [P] Validar estrutura semantica base (landmarks/headings) em `resources/js/components/sections/*.vue`
- [X] T007 [P] Validar escala de tokens (cores, tipografia, espacamentos, proporcoes) em `resources/css/tokens.css` e `resources/css/sections/*.css`
- [ ] T008 Validar integracao de assets oficiais sem substituicoes arbitrarias em `resources/js/data/portfolio-content.js` e `public/portfolio-assets/`

**Checkpoint**: Fonte de verdade confirmada e arquitetura alinhada ao design original.

---

## Phase 3: User Story 1 - Navegar portfolio principal (Priority: P1) 🎯 MVP

**Goal**: Reproduzir pagina principal com estrutura e semantica identicas ao design

**Independent Test**: Hero, sobre, habilidades, projetos, servicos e contato renderizam na ordem correta com navegacao funcional.

### Implementation for User Story 1

- [X] T009 [P] [US1] Implementar/ajustar HTML semantico da navegacao e header em `resources/js/components/layout/TopBar.vue`
- [X] T010 [P] [US1] Implementar/ajustar HTML semantico das secoes hero/sobre/habilidades em `resources/js/components/sections/HeroSection.vue`, `resources/js/components/sections/AboutSection.vue`, `resources/js/components/sections/SkillsSection.vue`
- [X] T011 [P] [US1] Implementar/ajustar HTML semantico das secoes projetos/servicos/contato em `resources/js/components/sections/ProjectsSection.vue`, `resources/js/components/sections/ServicesSection.vue`, `resources/js/components/sections/ContactSection.vue`
- [X] T012 [US1] Garantir composicao e ordem original das secoes no container principal em `resources/js/App.vue`

**Checkpoint**: Estrutura de conteudo principal equivalente ao design.

---

## Phase 4: User Story 2 - Prova de trabalho com projetos (Priority: P2)

**Goal**: Manter experiencia de cards e modais equivalente ao Open Design

**Independent Test**: Cards e modais de projeto exibem conteudo/midia correta e fechamento previsivel.

### Implementation for User Story 2

- [X] T013 [P] [US2] Validar estrutura visual dos cards e estados de interacao em `resources/js/components/sections/ProjectsSection.vue` e `resources/css/sections/projects.css`
- [X] T014 [P] [US2] Validar estrutura/ordem dos modais de projetos em `resources/js/components/overlays/ProjectModal.vue`, `resources/js/components/overlays/MoreProjectsModal.vue`, `resources/js/components/overlays/ExtraProjectDetailModal.vue`
- [ ] T015 [US2] Integrar videos/imagens oficiais e fallback sem alterar composicao em `resources/js/data/portfolio-content.js` e `public/portfolio-assets/`

**Checkpoint**: Bloco de projetos equivalente em conteudo, estrutura e estados visuais.

---

## Phase 5: User Story 3 - Responsividade, SEO e acessibilidade sem alterar visual (Priority: P3)

**Goal**: Validar experiencia completa em mobile/tablet/desktop com SEO/a11y preservando fidelidade

**Independent Test**: Sem overflow horizontal, foco visivel e metadados completos sem drift visual.

### Implementation for User Story 3

- [X] T016 [P] [US3] Validar responsividade sem quebrar composicao original em `resources/css/layout.css` e `resources/css/sections/*.css`
- [X] T017 [P] [US3] Aplicar/validar SEO tecnico (title, description, Open Graph, canonical) em `resources/views/welcome.blade.php`
- [X] T018 [US3] Aplicar/validar acessibilidade (teclado, foco, aria, alt) sem alterar visual em `resources/js/components/**/*.vue` e `resources/css/app.css`

**Checkpoint**: Requisitos de responsividade, SEO e acessibilidade atendidos com fidelidade visual preservada.

---

## Phase 6: Polish & Fidelity Review

**Purpose**: Revisao final 1:1 contra Open Design e reporte de diferencas

- [X] T019 Rodar checklist de equivalencia secao por secao em `specs/001-portfolio-landing-page/checklists/open-design-equivalence.md`
- [X] T020 [P] Executar comparativo visual desktop/tablet/mobile e registrar diferencas em `specs/001-portfolio-landing-page/implementation-summary.md`
- [X] T021 [P] Consolidar lista final de arquivos alterados e status de fidelidade em `specs/001-portfolio-landing-page/implementation-summary.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): inicio imediato
- Foundational (Phase 2): depende de Phase 1
- US1 (Phase 3): depende de Phase 2
- US2 (Phase 4): depende de US1
- US3 (Phase 5): depende de US1 + US2
- Polish (Phase 6): depende de todas as fases anteriores

### User Story Dependencies

- US1 (P1): define a base navegavel e semantica
- US2 (P2): depende da secao de projetos pronta em US1
- US3 (P3): valida o fluxo completo construido em US1 e US2

### Parallel Opportunities

- Phase 1: `T004`
- Phase 2: `T006`, `T007`
- US1: `T009`, `T010`, `T011`
- US2: `T013`, `T014`
- US3: `T016`, `T017`
- Phase 6: `T020`, `T021`

---

## Implementation Strategy

### MVP First (User Story 1)

1. Fechar Gate 1 e Gate 2 (MCP + leitura da verdade)
2. Completar Phase 2
3. Entregar US1 funcional
4. Validar equivalencia estrutural inicial

### Incremental Delivery

1. US1: estrutura principal fiel
2. US2: projetos e modais fieis
3. US3: responsividade + SEO + a11y sem alterar visual
4. Polish: checklist final e reporte de diferencas

---

## Notes

- Em conflito entre artefatos, aplicar: `index.html` > `DESIGN-MANIFEST.json` > `DESIGN-HANDOFF.md`.
- Nao criar melhorias visuais, nao simplificar componentes, nao remover blocos e nao trocar copy sem instrucao explicita.
- A entrega so fecha com 100% do checklist de equivalencia secao por secao.
