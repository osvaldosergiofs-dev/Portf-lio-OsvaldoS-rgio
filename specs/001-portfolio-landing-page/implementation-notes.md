# Implementation Notes - Open Design Source Mapping

## Confirmação obrigatória de leitura MCP (antes de codar)
- Projeto MCP Open Design confirmado: `Portifólio__PRO` (id `caeb15e4-1d4f-4566-95a2-e1728ab24d2c`)
- Arquivos lidos via MCP Open Design:
  1. `index.html`
  2. `DESIGN-HANDOFF.md`
  3. `DESIGN-MANIFEST.json`

## Seções Open Design -> Componentes Vue
- Header / Navegação -> `resources/js/components/layout/TopBar.vue`
- Hero -> `resources/js/components/sections/HeroSection.vue`
- Sobre -> `resources/js/components/sections/AboutSection.vue`
- Habilidades -> `resources/js/components/sections/SkillsSection.vue`
- Projetos (grid) -> `resources/js/components/sections/ProjectsSection.vue`
- Modal de projeto -> `resources/js/components/overlays/ProjectModal.vue`
- Modal "mais projetos" -> `resources/js/components/overlays/MoreProjectsModal.vue`
- Modal de detalhe extra -> `resources/js/components/overlays/ExtraProjectDetailModal.vue`
- Serviços -> `resources/js/components/sections/ServicesSection.vue`
- Contato -> `resources/js/components/sections/ContactSection.vue`
- Footer -> `resources/js/components/layout/FooterBar.vue`

## Tokens principais extraídos
- Paleta base: `#020605`, `#252525`, `#e0e0e0`, `#b6b6b6`, `#ffffff`, `#a6a6a6`
- Fontes: `Aptos Display`, `Aptos`, `Cascadia Code` (com fallback seguro)
- Estrutura: gradientes de superfície/página, bordas finas e ritmo de espaçamento fluido

## Assets esperados (Open Design)
- Imagens: `assets/header-avatar.png`, `mpcs2ess-image.png`, `mpcs2j9k-image.png`, `mpcs2m4u-image.png`, `assets/video-reference-thumbnail.png`
- Máscaras de ícones: `assets/php-logo-mask.png`, `assets/mysql-logo-mask.png`, `assets/npm-logo-mask.png`, `mp6zvams-image.png`
- Vídeos: `mpcsmkxw-Video-Project-AGENDA.mp4`, `mpcszrsq-Video-Project-VOUCHERX.mp4`, `mpct34x6-Video-Project-GHS.mp4`
- Currículo: `mpc3h1j2-OSVALDO-SÉRGIO_____.pdf`

## Observação
- O MCP Open Design disponibilizou conteúdo textual/estrutural completo e metadados.
- Os binários precisam ser copiados para `public/portfolio-assets/` para equivalência visual 1:1 final.
