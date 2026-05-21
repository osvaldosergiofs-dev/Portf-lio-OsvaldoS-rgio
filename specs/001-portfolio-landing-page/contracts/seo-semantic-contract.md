# SEO & Semantic Contract

## Objective
Definir requisitos mínimos e verificáveis de SEO técnico e semântica para a landing page.

## Document Metadata

- `<title>` MUST refletir nome profissional + especialidade.
- `<meta name="description">` MUST descrever proposta de valor do portfólio.
- Open Graph MUST incluir ao menos: `og:title`, `og:description`, `og:type`, `og:image`.
- URL canônica MUST estar definida no documento principal quando URL de produção estiver disponível.

## Semantic Structure

- Exatamente um `<main>` para conteúdo principal.
- Hierarquia de headings MUST iniciar em `h1` e seguir ordem lógica por seção.
- Cada seção principal MUST possuir `aria-labelledby` ou heading explícito associado.
- Conteúdo de contato e navegação MUST usar elementos nativos (`nav`, `a`, `button`, `section`, `footer`).

## Media Semantics

- Imagens de conteúdo MUST ter `alt` descritivo.
- Imagens decorativas MAY usar `alt=""`.
- Vídeos MUST possuir rótulo acessível (`aria-label` ou heading contextual).

## Quality Gates

- Lighthouse SEO score target: >= 90.
- Validação manual: sem heading skip crítico e sem landmarks ausentes.
- Nenhum asset relevante sem descrição alternativa apropriada.
