# Quickstart: Portfolio UI Fixes

## Prerequisites

- Node dependencies installed (`npm install` already represented by `package-lock.json`).
- Current branch: `002-portfolio-ui-fixes`.

## Build

```powershell
npm run build
```

If `esbuild` fails with `spawn EPERM` inside the sandbox, rerun the same command with elevated
permission. This is an environment permission issue, not a code failure.

## Local Preview

```powershell
npm run dev -- --host 127.0.0.1 --port 5173
```

Open the printed local URL, typically:

```text
http://127.0.0.1:5173/Portf-lio-OsvaldoS-rgio/
```

If the port is busy, Vite will choose the next available port.

## Manual QA Checklist

1. Desktop navigation:
   - Confirm menu order: Sobre, Projetos, Serviços, Habilidades, Contato.
   - Click Serviços and confirm desktop anchor behavior is preserved.
   - Confirm Habilidades appears after Serviços and before Contato.
2. Mobile navigation:
   - Use a mobile viewport around `390x844`.
   - Open the menu and click each option.
   - Confirm the section title lands close below the header and the menu closes.
   - Confirm there is no horizontal overflow.
3. Project modals:
   - Open project A, scroll modal content to the end, close it.
   - Open project B and confirm content starts at the top.
   - Repeat for "Mais projetos" and an extra project detail.
4. Contact copy:
   - Confirm the Contact heading reads exactly:
     `INTERFACES MODERNAS. SOLUÇÕES REAIS.`
   - Search page/source for the old phrase and confirm it is absent.
5. Regression pass:
   - Confirm Habilidades styling, content and animations are unchanged.
   - Confirm modal focus/close behavior still works with keyboard and click.

## Acceptance Evidence

Record:
- Build result.
- Desktop viewport result.
- Mobile viewport result.
- Modal A -> scroll end -> close -> modal B top result.
- Old/new contact phrase search result.
