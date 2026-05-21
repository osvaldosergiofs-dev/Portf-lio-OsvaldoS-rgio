# Data Model: Landing page de portfólio

## Overview
Modelo orientado a conteúdo e estado de UI para renderização da landing com fidelidade ao Open Design.

## Entities

### 1. PortfolioSection
- Purpose: Representar cada seção principal da landing.
- Fields:
  - `id` (string, unique): `home`, `sobre`, `habilidades`, `projetos`, `servicos`, `contato`
  - `title` (string)
  - `kicker` (string | null)
  - `order` (number)
  - `visible` (boolean)
- Validation Rules:
  - `id` MUST ser único.
  - `order` MUST manter sequência sem duplicidade.

### 2. ProjectShowcaseItem
- Purpose: Representar cartões principais de projeto e seus detalhes.
- Fields:
  - `id` (string, unique)
  - `slug` (string, unique)
  - `title` (string)
  - `summary` (string)
  - `detail` (string)
  - `tags` (string[])
  - `category` (string)
  - `thumbnailAsset` (MediaAssetReference)
  - `videoAsset` (MediaAssetReference | null)
  - `modalSections` (ProjectDetailSection[])
- Validation Rules:
  - `title`, `summary`, `tags` MUST existir.
  - `thumbnailAsset` MUST ser imagem válida.
  - `videoAsset`, quando presente, MUST ser mp4/webm com fallback.

### 3. ProjectDetailSection
- Purpose: Blocos textuais estruturados dentro do modal de projeto.
- Fields:
  - `kind` (enum): `about`, `problems`, `development`, `built`, `mvp`, `technologies`
  - `content` (string | string[])
- Validation Rules:
  - `kind` MUST ser único por projeto (exceto conteúdo complementar explicitamente definido).

### 4. SkillCategory
- Purpose: Agrupar habilidades por domínio.
- Fields:
  - `id` (string)
  - `name` (string)
  - `skills` (SkillChip[])
- Validation Rules:
  - `skills.length` MUST ser >= 1.

### 5. SkillChip
- Purpose: Item individual de habilidade renderizado na seção de habilidades.
- Fields:
  - `label` (string)
  - `iconRef` (string | null)
  - `iconAlt` (string | null)

### 6. ContactChannel
- Purpose: Ações de contato na seção final.
- Fields:
  - `id` (string)
  - `type` (enum): `email-copy`, `external-link`, `download`
  - `label` (string)
  - `value` (string)
  - `actionText` (string)
- Validation Rules:
  - `type=external-link` MUST ter URL absoluta segura (`https://`).
  - `type=download` MUST apontar para asset existente.

### 7. MediaAssetReference
- Purpose: Metadados de imagens e vídeos da landing.
- Fields:
  - `id` (string)
  - `path` (string)
  - `mediaType` (enum): `image`, `video`, `pdf`
  - `loadingStrategy` (enum): `eager`, `lazy`, `metadata`
  - `altText` (string | null)
  - `posterPath` (string | null)
- Validation Rules:
  - Assets fora da dobra MUST usar `lazy` ou `metadata`.
  - `altText` MUST existir para imagens de conteúdo.

### 8. ThemePreferenceState
- Purpose: Estado de tema claro/escuro persistido localmente.
- Fields:
  - `theme` (enum): `light`, `dark`
  - `source` (enum): `system`, `saved`

### 9. ModalState
- Purpose: Estado de abertura/fechamento e foco para modais.
- Fields:
  - `activeModal` (enum): `none`, `project`, `more-projects`, `extra-detail`
  - `activeProjectId` (string | null)
  - `focusReturnTarget` (string | null)

## Relationships
- `PortfolioSection` 1 -> N `ProjectShowcaseItem` (seção projetos)
- `ProjectShowcaseItem` 1 -> N `ProjectDetailSection`
- `ProjectShowcaseItem` N -> N `MediaAssetReference`
- `PortfolioSection` 1 -> N `SkillCategory` (seção habilidades)
- `PortfolioSection` 1 -> N `ContactChannel` (seção contato)

## State Transitions

### ModalState
- `none -> project` ao abrir card principal.
- `project -> none` ao fechar modal principal (ESC, overlay ou botão fechar).
- `none -> more-projects` ao abrir lista de projetos extras.
- `more-projects -> extra-detail` ao selecionar projeto extra.
- `extra-detail -> more-projects` ao fechar detalhe extra com modal intermediário ativo.

### ThemePreferenceState
- `system(light|dark) -> saved(light|dark)` ao usuário alternar tema manualmente.
- `saved` persiste entre sessões via `localStorage`.
