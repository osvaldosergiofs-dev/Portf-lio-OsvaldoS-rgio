# Research: Landing page de portfólio com fidelidade ao Open Design

## Decision 1: Fonte única de fidelidade visual
- Decision: Priorizar comportamento e aparência do `index.html` exportado de `Portifólio__PRO` em qualquer ambiguidade.
- Rationale: O handoff define o export como contrato visual e comportamental oficial.
- Alternatives considered: Reinterpretar layout por design system próprio (rejeitado por risco de desvio visual).

## Decision 2: Extração de tokens antes da implementação
- Decision: Extrair tokens de cor, tipografia, espaçamento, raio, sombra e motion para `tokens.css` antes de decompor componentes.
- Rationale: Evita variações entre seções e melhora manutenção.
- Alternatives considered: Copiar estilos inline por componente (rejeitado por duplicação e inconsistência).

## Decision 3: Arquitetura de componentes por superfície
- Decision: Organizar em SFCs por seção (`Hero`, `About`, `Skills`, `Projects`, `Services`, `Contact`) e overlays de modal.
- Rationale: Mapeia 1:1 o layout da landing e facilita evolução sem perda de semântica.
- Alternatives considered: Componente único monolítico (rejeitado por baixa manutenibilidade).

## Decision 4: Política de conteúdo textual
- Decision: Manter textos originais do layout, alterando apenas placeholders claramente temporários.
- Rationale: Preserva coerência narrativa e fidelidade ao material aprovado.
- Alternatives considered: Reescrita de copy na implementação (rejeitado por fugir do escopo de design fidelity).

## Decision 5: Estratégia de mídia e payload
- Decision: Usar lazy loading para imagens/vídeos fora da dobra; vídeo com `preload="metadata"`; poster quando aplicável.
- Rationale: Reduz custo de carregamento inicial e protege LCP/INP.
- Alternatives considered: Carregar mídia completa no primeiro paint (rejeitado por impacto de performance).

## Decision 6: Estratégia de animações
- Decision: Aplicar animações sutis, acionadas por interação/scroll, respeitando `prefers-reduced-motion`.
- Rationale: Mantém refinamento visual sem comprometer responsividade.
- Alternatives considered: Efeitos intensos e longos (rejeitado por risco de INP e distração).

## Decision 7: SEO técnico obrigatório
- Decision: Configurar título, descrição, Open Graph base, canonical e estrutura semântica de headings/landmarks.
- Rationale: Critério de aceite exige SEO técnico completo para uma landing pública.
- Alternatives considered: SEO apenas por conteúdo textual sem metadados completos (rejeitado por cobertura parcial).

## Decision 8: Acessibilidade operacional
- Decision: Garantir foco visível, navegação por teclado, semântica de botões/links/modais e alt text relevante.
- Rationale: Critério de aceite inclui validação básica de acessibilidade.
- Alternatives considered: Ajustes a11y apenas após implementação visual (rejeitado por retrabalho e risco).

## Decision 9: Matriz de responsividade oficial
- Decision: Validar nos viewports 360x800, 390x844, 430x932, 600x960, 820x1180, 1024x768, 1366x768, 1440x900 e 1920x1080.
- Rationale: Matriz vem do handoff e cobre casos mobile/tablet/desktop comuns.
- Alternatives considered: Validar só em 3 breakpoints genéricos (rejeitado por cobertura insuficiente).

## Decision 10: Estrutura de integração no repositório atual
- Decision: Implementar frontend Vue 3 + Vite dentro da estrutura existente (`resources/js` + `resources/css`), sem criar app paralelo.
- Rationale: Reduz overhead operacional e aproveita pipeline já configurado no projeto.
- Alternatives considered: Criar diretório `frontend/` separado (rejeitado por complexidade extra nesta entrega).
