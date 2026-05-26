# Tasks: Portfolio UI Fixes

**Input**: Design documents from `/specs/002-portfolio-ui-fixes/`  
**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/ui-behavior-contract.md](./contracts/ui-behavior-contract.md), [quickstart.md](./quickstart.md)

**Tests**: No automated test framework is configured for this Vue/Vite app. Validation tasks use `npm run build` plus browser-based manual/automated QA from [quickstart.md](./quickstart.md).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on incomplete tasks)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Discovery)

**Purpose**: Locate the existing implementation surfaces before changing behavior.

- [x] T001 Confirm active feature context points to `specs/002-portfolio-ui-fixes` in `.specify/feature.json`
- [x] T002 Review implementation plan and UI contract in `specs/002-portfolio-ui-fixes/plan.md` and `specs/002-portfolio-ui-fixes/contracts/ui-behavior-contract.md`
- [x] T003 Locate current exported-page renderer and section transformation surface in `src/App.vue`
- [x] T004 Locate project modal runtime behavior in `src/open-design-export.js`
- [x] T005 [P] Locate Vue modal equivalents in `src/components/overlays/ProjectModal.vue`, `src/components/overlays/MoreProjectsModal.vue`, and `src/components/overlays/ExtraProjectDetailModal.vue`
- [x] T006 [P] Locate menu/header navigation behavior in `src/open-design-export.js` and nav data in `src/data/portfolio-content.js`
- [x] T007 [P] Locate Contact heading text in `src/App.vue`, `src/open-design-export.js`, and `src/components/sections/ContactSection.vue`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared guardrails that block all implementation tasks.

**CRITICAL**: No user story work should begin until this phase is complete.

- [x] T008 Confirm no new styling is required by reviewing `.skills-section`, `.project-modal`, `.navlinks`, and `.contact` selectors in `src/styles/app.css`
- [x] T009 Confirm Habilidades source block keeps `id="habilidades"` and `aria-labelledby="habilidades-title"` in `src/open-design-export.js`
- [x] T010 Confirm modal scroll containers are `.project-modal__panel`, `.project-modal__copy`, `.project-modal__simple`, and `.project-modal__content` in `src/styles/app.css` and `src/open-design-export.js`
- [x] T011 Confirm old contact phrase variants to replace by searching `src/App.vue`, `src/open-design-export.js`, `src/components/sections/ContactSection.vue`, and `src/data/portfolio-content.js`

**Checkpoint**: Foundation ready; user story tasks can begin.

---

## Phase 3: User Story 1 - Modais Sempre No Topo (Priority: P1) MVP

**Goal**: Every project-related modal opens with internal content at the top.

**Independent Test**: Open project A, scroll internal content to the end, close it, open project B or an extra project detail, and confirm the internal scroll starts at `0`.

### Implementation for User Story 1

- [x] T012 [US1] Add reusable modal scroll reset helper for exported runtime containers in `src/open-design-export.js`
- [x] T013 [US1] Call modal scroll reset before opening the main project modal in `src/open-design-export.js`
- [x] T014 [US1] Call modal scroll reset before opening the more-projects modal in `src/open-design-export.js`
- [x] T015 [US1] Call modal scroll reset before opening the extra-project detail modal in `src/open-design-export.js`
- [x] T016 [US1] Repeat modal scroll reset on the next animation frame before focus restoration in `src/open-design-export.js`
- [x] T017 [P] [US1] Add `nextTick`-based scroll reset for conditional main project modal rendering in `src/components/overlays/ProjectModal.vue`
- [x] T018 [P] [US1] Add `nextTick`-based scroll reset for conditional more-projects modal rendering in `src/components/overlays/MoreProjectsModal.vue`
- [x] T019 [P] [US1] Add `nextTick`-based scroll reset for conditional extra-project detail modal rendering in `src/components/overlays/ExtraProjectDetailModal.vue`
- [x] T020 [US1] Validate main project modal A-to-B top reset using `specs/002-portfolio-ui-fixes/quickstart.md`
- [x] T021 [US1] Validate more-projects and extra-project detail modal top reset using `specs/002-portfolio-ui-fixes/quickstart.md`

**Checkpoint**: User Story 1 is fully functional and testable independently.

---

## Phase 4: User Story 2 - Habilidades Após Serviços (Priority: P2)

**Goal**: Habilidades appears after Serviços/"DO CÓDIGO AO DEPLOY." and before Contato with anchors intact.

**Independent Test**: Load the page and confirm section order after hero is `sobre`, `projetos`, `servicos`, `habilidades`, `contato`; confirm `#habilidades` still works.

### Implementation for User Story 2

- [x] T022 [US2] Move only the rendered Habilidades block after Serviços and before Contato in `src/App.vue`
- [x] T023 [US2] Reorder exported markup nav links to match section order in `src/App.vue`
- [x] T024 [US2] Reorder component-era nav data to match section order in `src/data/portfolio-content.js`
- [x] T025 [US2] Confirm Habilidades content, classes, and animations are not changed in `src/open-design-export.js` and `src/styles/app.css`
- [x] T026 [US2] Validate `#habilidades` exists exactly once and appears before `#contato` using `specs/002-portfolio-ui-fixes/contracts/ui-behavior-contract.md`

**Checkpoint**: User Story 2 is fully functional and testable independently.

---

## Phase 5: User Story 3 - Alinhamento Do Scroll Do Menu (Priority: P3)

**Goal**: Mobile menu clicks position section titles close below the header while desktop Serviços keeps current behavior.

**Independent Test**: In a mobile viewport, click every menu option and confirm the title lands near the header and menu closes; in desktop, click Serviços and confirm current behavior is preserved.

### Implementation for User Story 3

- [x] T027 [US3] Add header-height-based menu scroll helper in `src/open-design-export.js`
- [x] T028 [US3] Apply menu offset only when the mobile menu is open in `src/open-design-export.js`
- [x] T029 [US3] Ensure mobile menu closes and `aria-expanded` resets after menu click in `src/open-design-export.js`
- [x] T030 [US3] Preserve existing desktop Serviços anchor behavior in `src/open-design-export.js`
- [x] T031 [US3] Validate every mobile menu option lands within 16px below the header using `specs/002-portfolio-ui-fixes/quickstart.md`
- [x] T032 [US3] Validate Serviços desktop behavior and no horizontal overflow using `specs/002-portfolio-ui-fixes/contracts/ui-behavior-contract.md`

**Checkpoint**: User Story 3 is fully functional and testable independently.

---

## Phase 6: User Story 4 - Nova Frase De Contato (Priority: P4)

**Goal**: Contact heading shows the new phrase with the same visual treatment as the previous phrase.

**Independent Test**: Load Contato and confirm the old phrase appears zero times and the new phrase appears once in the Contact heading.

### Implementation for User Story 4

- [x] T033 [US4] Replace old Contact phrase with `INTERFACES MODERNAS. SOLUÇÕES REAIS.` in `src/App.vue`
- [x] T034 [US4] Replace old Contact phrase in Vue section equivalent in `src/components/sections/ContactSection.vue`
- [x] T035 [US4] Search for remaining old phrase variants in `src/App.vue`, `src/open-design-export.js`, `src/components/sections/ContactSection.vue`, and `src/data/portfolio-content.js`
- [x] T036 [US4] Validate new Contact heading keeps the same element and visual treatment using `specs/002-portfolio-ui-fixes/contracts/ui-behavior-contract.md`

**Checkpoint**: User Story 4 is fully functional and testable independently.

---

## Phase 7: Polish & Cross-Cutting Validation

**Purpose**: Verify the combined feature and report evidence.

- [x] T037 Run production build with `npm run build` using `package.json`
- [x] T038 Validate desktop navigation order, Serviços desktop exception, and Habilidades placement using `specs/002-portfolio-ui-fixes/quickstart.md`
- [x] T039 Validate mobile menu offset, menu close state, and no horizontal overflow using `specs/002-portfolio-ui-fixes/quickstart.md`
- [x] T040 Validate all project modal reset scenarios from `specs/002-portfolio-ui-fixes/contracts/ui-behavior-contract.md`
- [x] T041 Validate old/new Contact phrase search results from `specs/002-portfolio-ui-fixes/quickstart.md`
- [x] T042 Report modified files and validation evidence in final response referencing `src/App.vue`, `src/open-design-export.js`, `src/components/overlays/`, `src/components/sections/ContactSection.vue`, and `src/data/portfolio-content.js`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 7)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 Modais Sempre No Topo (P1)**: Can start after Foundational; no dependency on other stories.
- **US2 Habilidades Após Serviços (P2)**: Can start after Foundational; no dependency on US1.
- **US3 Alinhamento Do Scroll Do Menu (P3)**: Can start after Foundational, but final validation benefits from US2 nav order being complete.
- **US4 Nova Frase De Contato (P4)**: Can start after Foundational; no dependency on other stories.

### Within Each User Story

- Discovery before implementation.
- Runtime/exported-page behavior before equivalent component cleanup when both touch the same story.
- Implementation before quickstart/contract validation.
- Story checkpoint before moving to final polish.

### Parallel Opportunities

- T005, T006, and T007 can run in parallel during discovery.
- T017, T018, and T019 can run in parallel after T012-T016 clarify the modal reset pattern.
- US2 and US4 can run in parallel because they touch different concerns.
- US1 component-equivalent tasks can run in parallel with US2 section-order work after foundational tasks complete.
- Final validation tasks T038-T041 can run in parallel after build T037 succeeds.

---

## Parallel Example: User Story 1

```text
Task: "T017 [US1] Add nextTick-based scroll reset in src/components/overlays/ProjectModal.vue"
Task: "T018 [US1] Add nextTick-based scroll reset in src/components/overlays/MoreProjectsModal.vue"
Task: "T019 [US1] Add nextTick-based scroll reset in src/components/overlays/ExtraProjectDetailModal.vue"
```

---

## Parallel Example: User Story 4

```text
Task: "T033 [US4] Replace Contact phrase in src/App.vue"
Task: "T034 [US4] Replace Contact phrase in src/components/sections/ContactSection.vue"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete US1 modal reset tasks.
3. Stop and validate modal A -> scroll end -> close -> modal B opens at top.
4. Confirm focus/close behavior did not regress.

### Incremental Delivery

1. Complete Setup + Foundational.
2. Deliver US1 modal reset and validate independently.
3. Deliver US2 section order and validate anchors.
4. Deliver US3 menu offset and validate desktop/mobile.
5. Deliver US4 text replacement and validate phrase search.
6. Run final build and combined QA.

### Single-Agent Strategy

1. Work in priority order: US1 -> US2 -> US3 -> US4.
2. Avoid unrelated style edits.
3. After each user story, run its independent validation from `quickstart.md`.
4. Finish with build and report changed files/tests.

## Notes

- [P] tasks use different files or independent validation surfaces.
- Every story can be validated independently before final cross-cutting QA.
- The implementation must preserve Vue + Vite and avoid new dependencies.
- Styling files should remain unchanged unless validation finds a concrete overflow regression.
