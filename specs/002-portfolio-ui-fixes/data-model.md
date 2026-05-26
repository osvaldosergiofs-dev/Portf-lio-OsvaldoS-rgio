# Data Model: Portfolio UI Fixes

Esta feature não introduz persistência nem entidades de domínio. O "modelo" abaixo descreve os
estados de UI afetados e suas regras de validação.

## Project Modal

**Represents**: Modal aberto para detalhar um projeto principal ou extra.

**Relevant fields/state**:
- `isOpen`: indica se o modal está visível.
- `activeProject`: projeto selecionado.
- `scrollContainers`: painel e containers internos com overflow.
- `lastTrigger`: elemento que abriu o modal, usado para restauração de foco.

**Validation rules**:
- Ao abrir, todos os `scrollContainers` devem iniciar com `scrollTop = 0`.
- Se o conteúdo for renderizado condicionalmente, o reset deve ocorrer após a atualização do DOM.
- Fechar e reabrir o mesmo projeto não pode reaproveitar posição de scroll anterior.
- Abrir projeto B após projeto A rolado até o fim deve iniciar projeto B no topo.

## Section Order

**Represents**: Sequência visual e DOM das seções principais.

**Relevant fields/state**:
- `sectionIds`: sequência de IDs de seções renderizadas.
- `navLinks`: sequência de links do menu.

**Validation rules**:
- A ordem final após o herói deve ser: `sobre`, `projetos`, `servicos`, `habilidades`, `contato`.
- `habilidades` deve manter o mesmo ID, conteúdo, classes e animações.
- O menu deve refletir a mesma ordem das seções.
- Nenhuma seção pode ser duplicada ou removida.

## Menu Navigation

**Represents**: Comportamento de clique nos links de navegação.

**Relevant fields/state**:
- `targetSection`: seção de destino do link.
- `targetHeading`: título usado como referência de posicionamento.
- `headerHeight`: altura atual do header visível.
- `isMobileMenuOpen`: indica que o menu mobile está aberto.
- `viewportMode`: mobile ou desktop.

**Validation rules**:
- Em mobile, todas as opções devem usar offset baseado em `headerHeight`.
- Após clique mobile, o menu deve fechar.
- Em desktop, Serviços deve preservar o comportamento atual.
- O ajuste não pode criar overflow horizontal.

## Contact Heading

**Represents**: Título principal da seção Contato.

**Relevant fields/state**:
- `text`: texto exibido no heading.
- `visualTreatment`: classe, posição e hierarquia do heading.

**Validation rules**:
- O texto antigo não deve permanecer visível.
- O novo texto deve ser exatamente `INTERFACES MODERNAS. SOLUÇÕES REAIS.`.
- A classe/visual do heading deve ser a mesma do texto anterior.
