# UI Behavior Contract: Portfolio UI Fixes

## Scope

Este contrato define comportamentos observáveis para modais de projeto, ordem das seções,
navegação por menu e texto de Contato. Ele não define novas APIs externas.

## Contract: Project Modal Opens At Top

**Given** any project modal was previously scrolled internally  
**When** the visitor opens any project modal  
**Then** the modal's scrollable content starts at the top.

**Must verify**:
- Main project modal: `.project-modal .project-modal__copy` starts at `scrollTop = 0`.
- More projects modal: `.project-modal--more .project-modal__simple` starts at `scrollTop = 0`.
- Extra detail modal: `.project-modal--detail .project-modal__simple` starts at `scrollTop = 0`.
- Focus behavior and close behavior remain functional.

## Contract: Section Order And Anchors

**Given** the page is loaded  
**When** sections are inspected after the hero  
**Then** the order is `sobre`, `projetos`, `servicos`, `habilidades`, `contato`.

**Must verify**:
- `#habilidades` exists exactly once.
- Habilidades retains `.skills-section` and `aria-labelledby="habilidades-title"`.
- Menu order matches the section order.
- Menu links still navigate to existing IDs.

## Contract: Menu Scroll Offset

**Given** the mobile menu is open  
**When** any menu option is clicked  
**Then** the target section title lands close below the header and the menu closes.

**Must verify**:
- Target heading top is within 16px below current header height after smooth scroll settles.
- `body.menu-open` is removed after click.
- No horizontal overflow appears.

**Desktop exception**:
- Clicking Serviços on desktop preserves existing anchor behavior and must not use the
  mobile-specific offset routine.

## Contract: Contact Copy Replacement

**Given** the page is loaded  
**When** the Contact section is inspected  
**Then** the visible heading text is exactly `INTERFACES MODERNAS. SOLUÇÕES REAIS.`

**Must verify**:
- The old phrase appears zero times in visible page content.
- The new phrase appears once in the Contact heading.
- The heading keeps the previous class/visual treatment.
