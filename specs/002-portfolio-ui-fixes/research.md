# Research: Portfolio UI Fixes

## Decision 1: Resetar scroll de todos os containers relevantes ao abrir modal

**Decision**: Ao abrir qualquer modal de projeto, resetar o scroll do painel e dos containers
internos conhecidos (`.project-modal__copy`, `.project-modal__simple`, `.project-modal__content`)
para o topo. Em componentes Vue com renderização condicional, aguardar atualização do DOM antes
do reset e repetir no próximo frame antes de focar o modal.

**Rationale**: O bug nasce de estado visual persistente em containers internos com overflow.
Resetar apenas o documento não resolve quando o scroll real está no conteúdo do modal. Repetir o
reset após renderização garante que conteúdo recém-inserido também comece no topo.

**Alternatives considered**:
- Resetar apenas `window.scrollTo(0, 0)`: rejeitado porque o scroll afetado é interno ao modal.
- Resetar somente ao fechar: rejeitado porque o estado correto é propriedade da abertura.
- Remontar todo modal: rejeitado por risco de alterar animações e foco.

## Decision 2: Reordenar Habilidades por transformação de renderização

**Decision**: Mover o bloco renderizado de Habilidades para depois da seção Serviços e antes de
Contato, preservando classes, IDs, conteúdo e animações. Atualizar a ordem do menu para refletir a
ordem visual.

**Rationale**: A exigência é mudar ordem, não design. A transformação de renderização mantém o
HTML da seção intacto e reduz risco de regressão visual.

**Alternatives considered**:
- Recriar a seção como componente novo: rejeitado por violar "não refazer layout".
- Alterar CSS com `order`: rejeitado porque poderia divergir ordem DOM/âncoras/acessibilidade.
- Duplicar seção: rejeitado por risco de conteúdo duplicado e IDs repetidos.

## Decision 3: Offset de menu baseado na altura do header

**Decision**: Calcular o destino de scroll a partir do topo do título da seção menos a altura
atual do header e uma pequena margem. Aplicar a todas as opções quando o menu mobile estiver
aberto. No desktop, preservar Serviços com o comportamento atual e ajustar outras opções somente
se necessário.

**Rationale**: A altura do header muda por breakpoint. Calcular dinamicamente evita números
mágicos frágeis e mantém o título quase encostado no header em mobile.

**Alternatives considered**:
- Usar apenas `scroll-margin-top`: rejeitado porque não diferencia a exceção de Serviços no
desktop.
- Offset fixo: rejeitado por risco de quebra em variações de header.
- Aplicar ajuste igual no desktop inteiro: rejeitado por requisito explícito para Serviços.

## Decision 4: Substituir copy preservando visual

**Decision**: Procurar a frase antiga exata/acentuada e substituir por
"INTERFACES MODERNAS. SOLUÇÕES REAIS." no mesmo elemento/posição visual.

**Rationale**: A mudança é textual e não deve alterar hierarquia, estilo ou estrutura da seção de
Contato.

**Alternatives considered**:
- Inserir novo elemento: rejeitado por alterar layout e acessibilidade.
- Alterar classes de heading: rejeitado por mudar visual fora do escopo.

## Decision 5: Validação com build e navegador

**Decision**: Validar com `npm run build`, navegação por menu em desktop/mobile, abertura de
modais principais e extras após scroll interno, e checagem de overflow horizontal.

**Rationale**: Os riscos principais são regressão visual, âncoras incorretas e estado interno de
modal persistente. A matriz cobre esses pontos sem ampliar escopo.

**Alternatives considered**:
- Validar apenas build: rejeitado porque build não cobre comportamento de scroll.
- Validar apenas desktop: rejeitado porque o ajuste principal do menu é mobile.
