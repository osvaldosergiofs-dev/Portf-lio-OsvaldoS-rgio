# Feature Specification: Portfolio UI Fixes

**Feature Branch**: `002-portfolio-ui-fixes`  
**Created**: 2026-05-26  
**Status**: Draft  
**Input**: User description: "Quero fazer 4 alterações no projeto atual, mantendo o restante exatamente como está: corrigir scroll dos modais de projetos para sempre abrir no topo; mover Habilidades para depois de Do Deploy ao Código e antes de Contato; ajustar scroll do menu para posicionar títulos quase grudados no header no mobile, sem aplicar o novo ajuste à opção Serviços no desktop; trocar o texto de contato para INTERFACES MODERNAS. SOLUÇÕES REAIS."

## Clarifications

### Session 2026-05-26

- Q: Como o scroll dos modais deve ser resetado quando houver conteúdo interno rolável ou renderização condicional? → A: Resetar sempre que um modal abrir; se houver container interno com overflow, aplicar o topo nele; se o conteúdo for renderizado condicionalmente, garantir o reset após a atualização do conteúdo.
- Q: O que pode mudar ao reordenar Habilidades? → A: Alterar apenas a ordem de renderização, sem mudar estilos, conteúdo, animações ou componentes da seção Habilidades.
- Q: Como o offset do menu deve se comportar por viewport e seção? → A: Calcular o offset pela altura do header; em mobile aplicar para todas as opções; em desktop manter Serviços com o comportamento atual e só ajustar demais opções se necessário sem quebrar o existente.
- Q: Como substituir a frase de contato? → A: Procurar a frase exata e substituir pela nova frase mantendo a mesma classe e o mesmo visual do texto anterior.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Modais Sempre No Topo (Priority: P1)

Como visitante que abre detalhes de projetos, quero que cada modal comece sempre no topo para
ler o conteúdo desde o início, mesmo depois de ter fechado outro modal rolado até o fim.

**Why this priority**: O modal é uma interação central da seção de projetos; manter scroll antigo
faz o usuário perder o começo do conteúdo e cria sensação de estado quebrado.

**Independent Test**: Pode ser testado abrindo um modal de projeto, rolando seu conteúdo interno
até o fim, fechando e abrindo qualquer modal de projeto novamente; o conteúdo deve iniciar no
topo.

**Acceptance Scenarios**:

1. **Given** um modal de projeto aberto e rolado até o fim, **When** o visitante fecha e reabre
   o mesmo projeto, **Then** o conteúdo interno começa no topo.
2. **Given** um modal de projeto aberto e rolado até o fim, **When** o visitante fecha esse modal
   e abre outro projeto, **Then** o novo modal começa no topo, incluindo qualquer área interna
   com rolagem própria.
3. **Given** um modal de lista ou detalhe de projetos extras, **When** ele é aberto após uso
   anterior, **Then** seu conteúdo interno começa no topo.

---

### User Story 2 - Habilidades Após Serviços (Priority: P2)

Como visitante navegando pelo portfolio, quero ver a seção Habilidades depois da seção
"Do Código ao Deploy" e antes de Contato para seguir a ordem de apresentação solicitada.

**Why this priority**: A ordem das seções define a narrativa da página e precisa refletir a
sequência aprovada pelo solicitante.

**Independent Test**: Pode ser testado observando a ordem visual da página e a sequência de
navegação do menu; Habilidades deve aparecer depois de Serviços e antes de Contato.

**Acceptance Scenarios**:

1. **Given** a página carregada, **When** o visitante percorre as seções, **Then** a ordem é
   Sobre, Projetos, Serviços, Habilidades e Contato após o herói.
2. **Given** o menu de navegação visível, **When** o visitante lê as opções, **Then** Habilidades
   aparece depois de Serviços e antes de Contato.

---

### User Story 3 - Alinhamento Do Scroll Do Menu (Priority: P3)

Como visitante em celular, quero que o menu leve as seções para uma posição em que o título
fique quase encostado no header, facilitando a identificação imediata da seção aberta.

**Why this priority**: O ajuste melhora a navegação mobile sem alterar a composição visual das
seções ou o comportamento desktop já aprovado.

**Independent Test**: Pode ser testado clicando em cada opção do menu em largura mobile e
confirmando que o título da seção fica próximo ao header. Em desktop, a opção Serviços deve
preservar seu comportamento anterior.

**Acceptance Scenarios**:

1. **Given** o menu aberto em mobile, **When** o visitante clica em qualquer opção de seção,
   **Then** o título da seção fica próximo ao header e o menu fecha.
2. **Given** a navegação em desktop, **When** o visitante clica em Serviços, **Then** o
   comportamento atual dessa opção é preservado.
3. **Given** qualquer viewport validada, **When** o visitante usa o menu, **Then** não ocorre
   overflow horizontal nem sobreposição incoerente de texto.

---

### User Story 4 - Nova Frase De Contato (Priority: P4)

Como visitante chegando à seção Contato, quero ver a nova chamada
"INTERFACES MODERNAS. SOLUÇÕES REAIS." para refletir o posicionamento atualizado do portfolio.

**Why this priority**: A copy é uma alteração pontual solicitada e deve ser aplicada sem mudar
layout, hierarquia visual ou outros textos.

**Independent Test**: Pode ser testado acessando a seção Contato e verificando que a frase
antiga não aparece mais e que a nova frase aparece exatamente como solicitada.

**Acceptance Scenarios**:

1. **Given** a seção Contato visível, **When** o visitante lê o título principal da seção,
   **Then** o texto exibido é "INTERFACES MODERNAS. SOLUÇÕES REAIS.".
2. **Given** a página completa carregada, **When** o conteúdo textual é verificado, **Then** a
   frase antiga "vamos construir algo nitido" ou sua versão acentuada não aparece.

### Edge Cases

- Abrir um modal após rolar outro modal até o fim deve resetar o scroll mesmo quando os modais
  têm estruturas internas diferentes.
- Quando um modal possuir área interna com rolagem própria, essa área interna deve iniciar no
  topo ao abrir.
- Quando o conteúdo do modal só aparecer após atualização de renderização, o reset deve ocorrer
  depois que esse conteúdo estiver disponível.
- Reabrir o mesmo modal imediatamente após fechar deve iniciar no topo.
- A navegação mobile deve manter o menu fechado após o clique e não deve deixar o título
  escondido atrás do header.
- A alteração de ordem não deve duplicar ou remover nenhuma seção existente.
- A alteração de ordem da seção Habilidades não deve modificar seus estilos, conteúdo,
  animações ou componentes.
- O novo texto deve caber no espaço atual em mobile e desktop sem quebrar a hierarquia visual.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Todo modal relacionado a projetos MUST abrir com o conteúdo interno posicionado no
  topo.
- **FR-002**: O reset de scroll MUST ocorrer ao abrir o mesmo projeto novamente e ao alternar
  entre projetos diferentes.
- **FR-003**: Quando houver container interno com overflow em um modal de projeto, esse container
  MUST iniciar no topo ao abrir.
- **FR-004**: Quando um modal depender de renderização condicional, o reset de scroll MUST ocorrer
  depois que o conteúdo estiver disponível para o usuário.
- **FR-005**: A seção Habilidades MUST aparecer depois da seção "Do Código ao Deploy" e antes da
  seção Contato.
- **FR-006**: A reordenação de Habilidades MUST alterar apenas a ordem de renderização e MUST NOT
  alterar estilos, conteúdo, animações ou componentes dessa seção.
- **FR-007**: A navegação principal MUST refletir a mesma ordem visual das seções após a
  reordenação.
- **FR-008**: O alinhamento do menu MUST calcular o offset com base na altura do header visível.
- **FR-009**: Em mobile, ao clicar em qualquer opção do menu, o scroll MUST posicionar o título
  da seção próximo ao header.
- **FR-010**: Em desktop, a opção Serviços MUST preservar o comportamento atual de scroll.
- **FR-011**: Em desktop, as demais opções de menu MAY receber ajuste de alinhamento apenas se
  necessário e sem quebrar o comportamento existente.
- **FR-012**: A seção Contato MUST substituir a frase antiga por "INTERFACES MODERNAS. SOLUÇÕES
  REAIS." exatamente com essa capitalização e pontuação.
- **FR-013**: A nova frase de Contato MUST manter a mesma classe, posição visual e estilo do texto
  anterior.
- **FR-014**: As alterações MUST preservar todo o restante do conteúdo visual aprovado,
  interações, animações, responsividade e estilos de seção fora do escopo solicitado.

### Non-Functional Requirements *(mandatory)*

- **NFR-001 (Visual Fidelity)**: Implementation MUST match the approved design reference for
  color, typography, spacing, hierarchy, and composition except for the explicitly requested
  section order and copy changes.
- **NFR-002 (Performance)**: Implementation MUST define and meet explicit Core Web Vitals
  targets (LCP, CLS, INP) and optimize media/JS payloads accordingly.
- **NFR-003 (SEO)**: Implementation MUST include complete technical SEO metadata, semantic
  heading structure, Open Graph tags, and descriptive alt text.
- **NFR-004 (Accessibility)**: Implementation MUST provide visible focus states, keyboard
  navigation support, semantic HTML structure, and compliant contrast.
- **NFR-005 (Responsiveness)**: Implementation MUST support mobile, tablet, and desktop layouts
  with no horizontal overflow.
- **NFR-006 (Maintainability)**: Implementation MUST be componentized with clear responsibility
  boundaries and reusable patterns.
- **NFR-007 (Stack Constraint)**: Frontend implementation MUST use Vue 3 + Vite.
- **NFR-008 (Source-of-Truth Gate)**: Implementation MUST use MCP Open Design project
  `Portifólio__PRO` as single source of truth and MUST read `index.html`,
  `DESIGN-HANDOFF.md`, and `DESIGN-MANIFEST.json` before coding starts.
- **NFR-009 (No Reinterpretation Rule)**: Section spacing, typography, colors, and hierarchy
  MUST remain identical to the current approved implementation unless explicitly changed by this
  specification.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In 100% of tested project modal openings, the internal content starts at the top.
- **SC-002**: In 100% of tested page loads, Habilidades appears after "Do Código ao Deploy" and
  before Contato with no duplicated or missing sections.
- **SC-003**: In 100% of tested mobile menu clicks, the target section title lands within 16px
  below the header based on the current header height, and the menu closes.
- **SC-004**: In desktop validation, clicking Serviços preserves the existing desktop scroll
  behavior and does not use the mobile-specific alignment adjustment.
- **SC-005**: The old contact phrase appears zero times, and the new phrase appears exactly once
  in the visible Contato section with the same visual treatment as the previous phrase.
- **SC-006**: Mobile and desktop validation show zero horizontal overflow and no incoherent text
  overlap after the changes.

## Assumptions

- "Do Deploy ao Código" refers to the existing services section whose visible heading is
  "DO CÓDIGO AO DEPLOY.".
- "Qualquer modal de projeto" includes the main project detail modal, the more-projects modal,
  and extra project detail modals.
- The requested scroll adjustment is scoped to menu navigation and should not change manual
  scrolling behavior.
- Desktop adjustments outside Serviços are allowed only when needed to preserve or improve the
  existing section positioning without changing approved visual layout.
- The rest of the page is already approved and must remain unchanged unless a listed requirement
  directly demands a change.
