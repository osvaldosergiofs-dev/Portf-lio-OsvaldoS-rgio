# UI Surface Contract

## Objective
Definir o contrato funcional da interface da landing, garantindo que a implementação em Vue preserve
comportamento e estrutura do Open Design `Portifólio__PRO`.

## Sections Contract

| Section ID | Required | Content Contract | Interaction Contract |
|---|---|---|---|
| `home` | Yes | Hero com nome, lede e CTAs principais | CTA para `#projetos` e `#contato` funcional |
| `sobre` | Yes | Título, introdução e 3 pontos de valor | Navegação por âncora e leitura contínua |
| `habilidades` | Yes | Categorias e chips de habilidades com ícones | Não remover categorias existentes |
| `projetos` | Yes | 3 cards principais + ação "Mais projetos" | Card abre modal de detalhes, teclado suportado |
| `servicos` | Yes | 4 blocos de serviço com tags | Sem alteração de ordem sem justificativa |
| `contato` | Yes | Canais de contato e ação de currículo | Ações de copiar/abrir/download funcionais |

## Modal Contract

| Modal | Open Trigger | Close Triggers | Focus Rules |
|---|---|---|---|
| Project Modal | Clique/Enter/Space em `project-card` | botão fechar, overlay, ESC | Foco entra no modal e retorna ao trigger |
| More Projects Modal | Botão "Mais projetos" | botão fechar, overlay, ESC | Foco fica preso no modal enquanto aberto |
| Extra Detail Modal | Clique em item extra de projeto | botão fechar, overlay, ESC | Retorna ao item extra ou botão origem |

## Navigation Contract

- Topbar MUST conter links para `#sobre`, `#habilidades`, `#projetos`, `#servicos`, `#contato`.
- Estado ativo de navegação MUST refletir seção visível.
- Menu mobile MUST alternar estado aberto/fechado com `aria-expanded` consistente.

## Media Contract

- Imagens acima da dobra: carga imediata otimizada.
- Imagens e vídeos fora da dobra: lazy loading obrigatório.
- Vídeos de projeto: `preload="metadata"`, controles nativos e fallback estático quando indisponível.

## Accessibility Contract

- Elementos interativos MUST ser acionáveis por teclado.
- Focus ring MUST permanecer visível em tema claro e escuro.
- Modais MUST usar `role="dialog"`, `aria-modal="true"` e rótulo legível.
- Links e botões MUST manter semântica correta (não usar `div` clicável sem papel/teclado equivalente).
