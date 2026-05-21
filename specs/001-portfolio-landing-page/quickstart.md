# Quickstart: Landing page de portfólio (Vue 3 + Vite)

## Prerequisites

- Node.js 20+
- npm 10+
- Dependências do projeto instaladas (`npm install`)

## Run locally

```bash
npm run dev
```

Acesse a URL exibida pelo Vite e valide a landing.

## Build de produção

```bash
npm run build
```

## Validation checklist

### 1. Fidelidade visual

- Comparar lado a lado com `Portifólio__PRO/index.html`.
- Verificar correspondência de cores, tipografia, espaçamento, hierarquia e composição.
- Confirmar que nenhuma seção extra foi introduzida.

### 2. Responsividade (sem overflow horizontal)

Validar em:

- 360x800
- 390x844
- 430x932
- 600x960
- 820x1180
- 1024x768
- 1366x768
- 1440x900
- 1920x1080

### 3. Acessibilidade básica

- Navegação completa por teclado (Tab/Shift+Tab/Enter/Escape).
- Foco visível em links, botões, menu e modais.
- Estrutura semântica coerente (`main`, `section`, `nav`, `footer`, headings).

### 4. SEO técnico

- Título e descrição corretos.
- Open Graph presente.
- Imagens com alt text apropriado.

### 5. Performance

- Confirmar lazy loading para mídia fora da dobra.
- Confirmar vídeos com `preload="metadata"`.
- Rodar auditoria Lighthouse e registrar:
  - LCP <= 2.5s
  - CLS <= 0.1
  - INP <= 200ms

## Expected outcome

- Landing implementada com alta fidelidade ao design.
- Estrutura componentizada e pronta para evolução.
- Critérios de aceite de SEO, acessibilidade, responsividade e performance atendidos.
