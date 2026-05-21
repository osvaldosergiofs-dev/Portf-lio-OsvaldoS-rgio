<!--
Sync Impact Report
- Version change: 1.0.0 -> 1.1.0
- Modified principles:
  - I. Open Design Visual Fidelity (NON-NEGOTIABLE) -> I. Open Design 100% Visual and Structural Fidelity (NON-NEGOTIABLE)
  - II. Performance-First Delivery -> II. Performance-First Delivery Without Fidelity Regression
- Added sections:
  - None
- Removed sections:
  - None
- Templates requiring updates:
  - updated: .specify/templates/plan-template.md
  - updated: .specify/templates/spec-template.md
  - updated: .specify/templates/tasks-template.md
  - pending: .specify/templates/commands/*.md (directory not present in this repository)
- Follow-up TODOs:
  - None
-->

# Meu Portifolio Constitution

## Core Principles

### I. Open Design 100% Visual and Structural Fidelity (NON-NEGOTIABLE)
All UI implementation MUST preserve the official Open Design reference with 100% fidelity in
color, typography, spacing, hierarchy, composition, and section order. Teams MUST extract
reusable design tokens and layout values from the Open Design source and map them directly into
implementation. Reinterpretation, reordering, spacing changes, typography changes, color
changes, or hierarchy changes are prohibited unless explicitly evidenced in the source design.
Rationale: this product requires exact implementation, not approximation.

### II. Performance-First Delivery Without Fidelity Regression
Performance is a first-class requirement and MUST be planned before implementation. Each
feature plan MUST define budgets for Core Web Vitals (LCP, CLS, INP), image/video optimization
strategy, and JavaScript minimization approach. New changes MUST not regress agreed budgets and
MUST include verification evidence in review artifacts. Performance optimization MUST NOT alter
approved visual output.
Rationale: portfolio UX and conversion quality depend on fast, stable interaction.

### III. Technical SEO as a Release Gate
Every releasable page MUST implement complete technical SEO: title and description metadata,
Open Graph and social sharing tags, semantic heading structure, and descriptive alt text for
meaningful media. Content structure MUST be machine-readable and human-meaningful.
Rationale: discoverability is a core business outcome and must be built into delivery.

### IV. Accessibility by Default
Accessibility compliance MUST be built in from the first implementation pass. Interactive
elements MUST expose visible focus states, keyboard navigation MUST work end-to-end, contrast
MUST meet accessibility standards, and semantic HTML landmarks/roles MUST be used correctly.
Accessibility defects are release blockers.
Rationale: inclusive access is a quality baseline, not a post-release enhancement.

### V. Responsive, Componentized, Maintainable Code
Implementation MUST be fully responsive across mobile, tablet, and desktop breakpoints with no
horizontal overflow. Code MUST be componentized with clear responsibilities, minimal coupling,
and maintainable structure. Reusable tokens, utility patterns, and component contracts MUST be
preferred over one-off inline overrides.
Rationale: long-term maintainability and reliable multi-device rendering are mandatory.

## Non-Negotiable Technical Constraints

- Stack is fixed to Vue 3 + Vite for frontend implementation.
- Open Design MCP project `Portifólio__PRO` is the single source of truth for design extraction.
- Mandatory source files are `index.html`, `DESIGN-HANDOFF.md`, and `DESIGN-MANIFEST.json`.
- Implementation MUST NOT start until the MCP Open Design source has been read and mapped from
  `Portifólio__PRO` including all mandatory files.
- The existing approved layout MUST be implemented as-is; redesign is out of scope.
- Performance, SEO, accessibility, and responsiveness requirements are all mandatory release
gates and cannot be traded off without approved constitutional amendment.

## Delivery Workflow and Quality Gates

1. Discovery and planning MUST include Open Design extraction notes, token mapping, and fidelity
checkpoints before coding.
2. Pre-implementation gate MUST record evidence that `Portifólio__PRO` and mandatory files were
   read via MCP Open Design.
3. Implementation MUST preserve semantic structure while matching visual reference.
4. Validation MUST include:
   - Responsive verification on mobile, tablet, and desktop breakpoints.
   - Keyboard-only navigation and visible focus inspection.
   - Core Web Vitals and payload checks against defined budgets.
   - Metadata and social preview validation (title, description, Open Graph).
5. Reviews MUST reject changes that regress fidelity, performance, SEO, accessibility, or
maintainability requirements.

## Governance

This constitution is the highest authority for delivery decisions in this repository.

- Amendment process: changes require a documented proposal, rationale, impact analysis on active
templates, and explicit maintainer approval.
- Versioning policy:
  - MAJOR for incompatible governance or principle removals/redefinitions.
  - MINOR for new principles/sections or materially expanded obligations.
  - PATCH for wording clarifications that do not change obligations.
- Compliance review: every plan, spec, task list, and implementation review MUST include an
explicit constitution compliance check before approval.

**Version**: 1.1.0 | **Ratified**: 2026-05-20 | **Last Amended**: 2026-05-20
