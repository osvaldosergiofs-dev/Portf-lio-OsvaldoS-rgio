export const openDesignMarkup = "<div class=\"mouse-spotlight\" aria-hidden=\"true\"></div>\n  <div class=\"custom-cursor\" aria-hidden=\"true\">\n    <div class=\"custom-cursor__glow\"></div>\n    <div class=\"custom-cursor__ring\"></div>\n    <div class=\"custom-cursor__core\"></div>\n  </div>\n\n  <header class=\"topbar\">\n    <div class=\"shell\">\n      <a class=\"brand\" href=\"#home\" aria-label=\"Voltar ao início\">\n        <span class=\"brand-mark\" aria-hidden=\"true\">\n          <img src=\"/portfolio-assets/assets/header-avatar.png\" alt=\"\">\n        </span>\n        <span class=\"brand-name\">Osvaldo Sérgio</span>\n      </a>\n      <div class=\"topbar-actions\">\n      <nav class=\"navlinks\" aria-label=\"Navegação principal\">\n        <a href=\"#sobre\">Sobre</a>\n        <a href=\"#habilidades\">Habilidades</a>\n        <a href=\"#projetos\">Projetos</a>\n        <a href=\"#servicos\">Serviços</a>\n        <a href=\"#contato\">Contato</a>\n      </nav>\n      <button class=\"theme-toggle\" type=\"button\" id=\"theme-toggle\" title=\"Alternar tema\" aria-label=\"Ativar tema claro\" aria-live=\"polite\">\n        <svg class=\"sun-and-moon\" aria-hidden=\"true\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <mask id=\"moon-mask\">\n            <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\"></rect>\n            <circle class=\"moon-cutout\" cx=\"24\" cy=\"10\" r=\"6\" fill=\"black\"></circle>\n          </mask>\n          <circle class=\"sun\" cx=\"12\" cy=\"12\" r=\"6\" mask=\"url(#moon-mask)\" fill=\"currentColor\"></circle>\n          <g class=\"sun-beams\" stroke=\"currentColor\">\n            <line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line>\n            <line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line>\n            <line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line>\n            <line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line>\n            <line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line>\n            <line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line>\n            <line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line>\n            <line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>\n          </g>\n        </svg>\n      </button>\n      <button class=\"menu-button\" type=\"button\" aria-label=\"Abrir menu\" aria-expanded=\"false\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </button>\n      </div>\n    </div>\n  </header>\n\n  <main id=\"home\">\n    <section class=\"hero\" aria-labelledby=\"hero-title\">\n      <div class=\"hero-grid\">\n        <div>\n          <div class=\"eyebrow\">Full-stack developer / WEB DEVELOPER</div>\n          <h1 id=\"hero-title\">Osvaldo <span style=\"\">Sérgio</span></h1>\n          <p class=\"hero-lede\">Desenvolvedor Full-Stack com experiência em aplicações web responsivas, dashboards administrativos e sistemas SaaS utilizando Vue.js, Laravel e JavaScript moderno.</p>\n          <div class=\"hero-actions\">\n            <a class=\"button button-primary\" href=\"#projetos\">Ver projetos</a>\n            <a class=\"button\" href=\"#contato\">Falar comigo</a>\n          </div>\n        </div>\n\n        <aside class=\"hero-panel\" aria-label=\"Resumo profissional\">\n          <div class=\"panel-row\">\n            <div class=\"panel-label\">Foco</div>\n            <div class=\"panel-value\">Interfaces modernas, sistemas escaláveis e experiências web responsivas.</div>\n          </div>\n          <div class=\"panel-row\">\n            <div class=\"panel-label\">Stack</div>\n            <div class=\"panel-value\">Vue.js · React · Laravel · JavaScript · TypeScript</div>\n          </div>\n          <div class=\"panel-row status-line\">\n            <span class=\"pulse\" aria-hidden=\"true\"></span>\n            <span>Disponível para conversas seletivas</span>\n          </div>\n        </aside>\n      </div>\n      <div class=\"scroll-cue\" aria-hidden=\"true\">Scroll</div>\n    </section>\n\n    <section class=\"section about-section\" id=\"sobre\" aria-labelledby=\"sobre-title\">\n      <div class=\"shell\">\n        <div class=\"section-head\">\n          <div>\n            <div class=\"section-kicker\">SOBRE MIM</div>\n            <h2 class=\"section-title\" id=\"sobre-title\">DESENVOLVIMENTO COM FOCO EM EXPERIÊNCIA.</h2>\n          </div>\n          <p class=\"section-intro\">Transformo requisitos de negócio em aplicações web modernas, responsivas e fáceis de manter.</p>\n        </div>\n\n        <div class=\"about-layout\">\n          <div class=\"about-copy\">\n            <p>Combino desenvolvimento front-end, integração de APIs e arquitetura de interfaces para criar aplicações performáticas, organizadas e orientadas à experiência do usuário. O objetivo é transformar complexidade em fluxos claros, componentes reutilizáveis e produtos digitais consistentes.</p>\n            <div class=\"about-points\">\n              <div class=\"point\">\n                <strong>01</strong>\n                <span>Interfaces responsivas, componentização e experiência consistente em diferentes tamanhos de tela.</span>\n              </div>\n              <div class=\"point\">\n                <strong>02</strong>\n                <span>Integração de APIs, regras de negócio e fluxos de dados com leitura simples para o usuário final.</span>\n              </div>\n              <div class=\"point\">\n                <strong>03</strong>\n                <span>Código organizado, atenção à performance e manutenção escalável para evolução contínua.</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section skills-section\" id=\"habilidades\" aria-labelledby=\"habilidades-title\">\n      <div class=\"shell\">\n        <div class=\"skills-head\">\n          <h2 id=\"habilidades-title\">Habilidades</h2>\n        </div>\n\n        <svg class=\"skill-symbols\" aria-hidden=\"true\" focusable=\"false\">\n          <symbol id=\"skill-icon-vue\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M2 4h5.2L12 12.2 16.8 4H22L12 21 2 4Zm6.8 0L12 9.5 15.2 4h-2.4L12 5.4 11.2 4H8.8Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-js\" viewBox=\"0 0 24 24\">\n            <rect x=\"2.6\" y=\"2.6\" width=\"18.8\" height=\"18.8\" rx=\"1.9\" fill=\"currentColor\"></rect>\n            <text class=\"skill-logo-letter\" x=\"6.1\" y=\"17.4\" fill=\"var(--skill-logo-reverse)\">JS</text>\n          </symbol>\n          <symbol id=\"skill-icon-html\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M3.8 2.8h16.4l-1.48 16.35L12 21.2l-6.72-2.05L3.8 2.8Z\"></path>\n            <path fill=\"currentColor\" opacity=\".22\" d=\"M12 4.5h6.45l-1.17 13.25L12 19.35V4.5Z\"></path>\n            <path class=\"skill-logo-mark\" d=\"M7.2 6.7h9.6l-.22 2.35H9.76l.15 1.78h6.5l-.58 6.1L12 18.03l-3.82-1.1-.27-3.03h2.28l.12 1.25 1.69.46 1.72-.46.2-2.08H7.78L7.2 6.7Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-css\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M3.2 2.2h17.6l-1.58 17.3L12 21.8l-7.22-2.3L3.2 2.2Z\"></path>\n            <path fill=\"currentColor\" opacity=\".24\" d=\"M12 3.95h6.75l-1.24 14.2L12 19.9V3.95Z\"></path>\n            <path class=\"skill-logo-mark\" d=\"M6.15 5.7h11.7l-.34 3.56H9.08l.15 1.78h8.1l-.73 7.72L12 20.1l-4.6-1.34-.34-3.92h3.02l.15 1.63 1.77.48 1.82-.48.23-2.62H6.9l-.27-2.94h7.9l.18-2.04H6.46L6.15 5.7Z\"></path>\n            <path fill=\"currentColor\" opacity=\".16\" d=\"M5.05 4h13.65l-.18 1.85H5.22L5.05 4Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-vuetify\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M12 3 22 9.2 12 21 2 9.2 12 3Zm0 4.4L6.6 10l5.4 6.5 5.4-6.5L12 7.4Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-pinia\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M12 3c2 0 3.4 1.4 3.4 3.2 0 1.5-.9 2.6-2.1 3.1V12h3.1c1.9 0 3.4 1.5 3.4 3.4S18.3 19 16.4 19c-1.7 0-3-1.1-3.3-2.7h-2.2C10.6 17.9 9.3 19 7.6 19c-1.9 0-3.4-1.6-3.4-3.6S5.7 12 7.6 12h3.1V9.3a3.3 3.3 0 0 1-2.1-3.1C8.6 4.4 10 3 12 3Zm0 2a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 12 5Zm-4.4 9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm8.8 0a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-axios\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M8 4h4.6L7.8 20H3.4L8 4Zm8.2 0H20l-4.6 16h-4.6L16.2 4Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-vite\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M3 4.5 21 7.7 12 21 3 4.5Zm7.6 3.2-2 5.1h3l-1 4.1 5.2-6.5h-3l1.4-2.7h-3.6Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-php\" viewBox=\"0 0 24 24\">\n            <g transform=\"translate(4.8 7.35) skewX(-8 7.2 4.6)\">\n              <ellipse cx=\"7.2\" cy=\"4.65\" rx=\"6.9\" ry=\"3.35\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.15\"></ellipse>\n              <path fill=\"currentColor\" opacity=\".18\" d=\"M2.1 3.05c1.02-.9 2.8-1.48 5.12-1.48 2.28 0 4.02.56 5.06 1.42-.72-.18-1.7-.28-2.94-.28H5.04c-1.18 0-2.16.12-2.94.34Z\"></path>\n              <text class=\"skill-php-letter\" x=\"2.34\" y=\"6.28\">php</text>\n            </g>\n          </symbol>\n          <symbol id=\"skill-icon-laravel\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M4 5.5 9 3l5 2.5v5L9 13 4 10.5v-5Zm11 1 5-2.5v5l-5 2.5v-5ZM4 12.5 9 15l5-2.5v5L9 20l-5-2.5v-5Zm11 1 5-2.5v5L15 18.5v-5Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-api\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-shield-key\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Zm0 8.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0V16m0 0h3\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-key\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 8a5 5 0 1 0 1.4 4.6L21 7v4h-3v3h-3\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-route\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 5h4a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h9M6 5l-2 2m2-2 2 2m12 12-2 2m2-2-2-2\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-db-upload\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3m-8-8c0 1.7 3.6 3 8 3m5 7v-7m0 0-3 3m3-3 3 3\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-seed\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 21V10m0 0C9 7 6 6 3 7c1 4 4 6 9 5m0-2c3-3 6-4 9-3-1 4-4 6-9 5\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-folder-code\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 7h7l2 2h9v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm7 5-2 2 2 2m4-4 2 2-2 2\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-db\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6Zm0 6c0 1.7 3.6 3 8 3s8-1.3 8-3M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-mysql\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M3.2 15.9c2.2-4.55 5.9-7.12 10.95-7.7 2.85-.32 5.05.28 6.55 1.8-1.75-.26-3.08.04-4.05.9 1.5.34 2.74 1.33 3.74 2.96-2.28-1.28-4.84-1.58-7.64-.9-2.38.58-4.32 1.8-5.8 3.66 2.58-.74 5.2-.9 7.88-.48-2.32.48-4.45 1.22-6.4 2.22-1.72.9-3.22.67-4.5-.7l-.73-1.76Z\"></path>\n            <path class=\"skill-logo-mark\" d=\"M14.7 8.1c.78-.78 1.8-1.35 3.08-1.7-.28 1.18-.76 2.1-1.44 2.77-.52-.44-1.06-.8-1.64-1.07Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-admin-db\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v4c0 1.7-3.6 3-8 3s-8-1.3-8-3V6Zm5 13a3 3 0 0 1 6 0m-3-6.5a2 2 0 1 0 0 4\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-git\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M22 10.6 13.4 2a2 2 0 0 0-2.8 0L8.9 3.7l2.3 2.3a2.4 2.4 0 0 1 3.1 3.1l2.2 2.2a2.4 2.4 0 1 1-1.5 1.5l-2-2v5.1a2.4 2.4 0 1 1-2-.1V8.5a2.4 2.4 0 0 1-.9-3L7.4 4 2 9.4a2 2 0 0 0 0 2.8l8.6 8.6a2 2 0 0 0 2.8 0l8.6-8.6a2 2 0 0 0 0-2.8Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-github\" viewBox=\"0 0 16 16\">\n            <path fill=\"currentColor\" d=\"M8 0a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.34c-2.23.49-2.7-1.07-2.7-1.07-.37-.93-.9-1.18-.9-1.18-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.34.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .68-.22 2.2.82A7.6 7.6 0 0 1 8 3.88c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.18c0 .21.15.46.55.38A8 8 0 0 0 8 0Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-pull-request\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 3v12m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-9v4a4 4 0 0 1-4 4h-4m8-8-3 3m3-3 3 3m-3 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-vscode\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M20 4.5 15.8 3 8.4 10 4.8 7.2 3 8.2v7.6l1.8 1 3.6-2.8 7.4 7L20 19.5v-15Zm-4.5 4v7L11.2 12l4.3-3.5ZM5.4 10.2 7.6 12l-2.2 1.8v-3.6Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-terminal\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 5h16v14H4V5Zm3 5 3 2-3 2m5 1h5\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-npm\" viewBox=\"0 0 24 24\">\n            <rect x=\"2.7\" y=\"6.4\" width=\"18.6\" height=\"11.2\" rx=\"1.1\" fill=\"currentColor\"></rect>\n            <rect class=\"skill-logo-mark\" x=\"5.1\" y=\"8.7\" width=\"13.8\" height=\"6.6\" rx=\".35\"></rect>\n            <path fill=\"currentColor\" d=\"M7 13.5V10.4h3.75v3.1H9.55v-2H8.2v2H7Zm5.2 0V10.4h4.85v3.1h-1.2v-2H14.5v2h-1.2v-2h-.9v2h-1.2Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-node\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M12 2 21 7v10l-9 5-9-5V7l9-5Zm-3 14h2V9l4 7h2V8h-2v5l-3-5H9v8Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-server\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-cloud-server\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 18a4 4 0 1 1 .7-7.9A5.5 5.5 0 0 1 18 12a3 3 0 0 1 0 6H7Zm3-5h5m-5 3h5\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-globe\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21M12 3c-2.4 2.4-3.6 5.4-3.6 9s1.2 6.6 3.6 9M3.6 9h16.8M3.6 15h16.8\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-network\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 7v4l-7 6m7-6 7 6\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-upload-cloud\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 18a4 4 0 1 1 .7-7.9A5.5 5.5 0 0 1 18 12a3 3 0 0 1 0 6h-3m-3 2v-8m0 0-3 3m3-3 3 3\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-code-check\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 8-4 4 4 4m5-8 4 4-4 4m4 3 2 2 4-5\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-layers\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-components\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-responsive\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\" d=\"M3 5h14v10H3V5Zm15 5h3v9h-6v-4h3v-5ZM7 19h5\"></path>\n          </symbol>\n          <symbol id=\"skill-icon-history-branch\" viewBox=\"0 0 24 24\">\n            <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 4v12m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-11a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v1a4 4 0 0 1-4 4h-4\"></path>\n          </symbol>\n        </svg>\n\n        <div class=\"skills-panel\">\n          <div class=\"skills-grid\" aria-label=\"Habilidades organizadas por categoria\">\n          <section class=\"skill-category\">\n            <h3 class=\"skill-name\">Frontend</h3>\n            <div class=\"skill-list\" aria-label=\"Habilidades de Frontend\">\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-vue\"></use></svg>Vue.js</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-vue\"></use></svg>Vue 3</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-js\"></use></svg>JavaScript</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon skill-html-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-html\"></use></svg>HTML5</span>\n              <span class=\"skill-chip\"><span class=\"skill-chip-icon skill-css-mask\" aria-hidden=\"true\"></span>CSS3</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-vuetify\"></use></svg>Vuetify</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-pinia\"></use></svg>Pinia</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-vue\"></use></svg>Vue Router</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-axios\"></use></svg>Axios</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-vite\"></use></svg>Vite</span>\n            </div>\n          </section>\n          <section class=\"skill-category\">\n            <h3 class=\"skill-name\">Backend</h3>\n            <div class=\"skill-list\" aria-label=\"Habilidades de Backend\">\n              <span class=\"skill-chip\"><span class=\"skill-chip-icon skill-php-mask\" aria-hidden=\"true\"></span>PHP</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-laravel\"></use></svg>Laravel</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-api\"></use></svg>APIs REST</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-shield-key\"></use></svg>JWT</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-key\"></use></svg>Bearer Token</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-route\"></use></svg>Controllers</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-db-upload\"></use></svg>Migrations</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-seed\"></use></svg>Seeders</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-folder-code\"></use></svg>Resources</span>\n            </div>\n          </section>\n          <section class=\"skill-category\">\n            <h3 class=\"skill-name\">Banco de Dados</h3>\n            <div class=\"skill-list\" aria-label=\"Habilidades de Banco de Dados\">\n              <span class=\"skill-chip\"><span class=\"skill-chip-icon skill-mysql-mask\" aria-hidden=\"true\"></span>MySQL</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-db\"></use></svg>SQL</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-admin-db\"></use></svg>phpMyAdmin</span>\n            </div>\n          </section>\n          <section class=\"skill-category\">\n            <h3 class=\"skill-name\">Ferramentas</h3>\n            <div class=\"skill-list\" aria-label=\"Ferramentas\">\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-git\"></use></svg>Git</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-github\"></use></svg>GitHub</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-history-branch\"></use></svg>Git Flow</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-pull-request\"></use></svg>Pull Requests</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-vscode\"></use></svg>VS Code</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-terminal\"></use></svg>PowerShell</span>\n              <span class=\"skill-chip\"><span class=\"skill-chip-icon skill-npm-mask\" aria-hidden=\"true\"></span>npm</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-node\"></use></svg>Node.js</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-server\"></use></svg>WAMP</span>\n            </div>\n          </section>\n          <section class=\"skill-category\">\n            <h3 class=\"skill-name\">Deploy/Infra</h3>\n            <div class=\"skill-list\" aria-label=\"Habilidades de Deploy e Infra\">\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-cloud-server\"></use></svg>Hostinger</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-globe\"></use></svg>Registro.br</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-network\"></use></svg>DNS</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-upload-cloud\"></use></svg>Deploy Laravel em hospedagem compartilhada</span>\n            </div>\n          </section>\n          <section class=\"skill-category\">\n            <h3 class=\"skill-name\">Boas práticas</h3>\n            <div class=\"skill-list\" aria-label=\"Boas práticas\">\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-code-check\"></use></svg>Clean Code</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-layers\"></use></svg>Arquitetura de sistemas</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-components\"></use></svg>Componentização</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-responsive\"></use></svg>Responsividade</span>\n              <span class=\"skill-chip\"><svg class=\"skill-chip-icon\" aria-hidden=\"true\"><use href=\"#skill-icon-history-branch\"></use></svg>Versionamento</span>\n            </div>\n          </section>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section\" id=\"projetos\" aria-labelledby=\"projetos-title\">\n      <div class=\"shell\">\n        <div class=\"section-head\">\n          <div>\n            <div class=\"section-kicker\">Projetos selecionados</div>\n            <h2 class=\"section-title\" id=\"projetos-title\">TRÊS RECORTES DE PRODUTO.</h2>\n          </div>\n          <p class=\"section-intro\">Projetos reais desenvolvidos com foco em sistemas web modernos, experiência do usuário e aplicações full-stack.</p>\n        </div>\n\n        <div class=\"project-grid\">\n          <article class=\"project-card\" tabindex=\"0\" data-project=\"cliqueagenda\" data-title=\"CLIQUEAGENDA\" data-detail=\"Sistema de agendamento com gestão de clientes, funcionários, serviços e autenticação completa.\" data-tags=\"VUE 3, LARAVEL, PINIA\">\n            <div class=\"project-visual project-visual--image\">\n              <div class=\"project-image-frame\">\n                <img src=\"/portfolio-assets/mpcs2ess-image.png\" alt=\"Logo do projeto CliqueAgenda\">\n              </div>\n            </div>\n            <div class=\"project-content\">\n              <div class=\"card-kicker\">SAAS / AGENDAMENTO</div>\n              <h3>CLIQUEAGENDA</h3>\n              <p>Sistema de agendamento com gestão de clientes, funcionários, serviços e autenticação completa.</p>\n              <div class=\"project-meta\">\n                <span class=\"tag\">VUE 3</span>\n                <span class=\"tag\">LARAVEL</span>\n                <span class=\"tag\">PINIA</span>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"project-card\" tabindex=\"0\" data-project=\"voucher\" data-title=\"VOUCHER SYSTEM\" data-detail=\"Sistema para geração automática de vouchers em PDF com autenticação, numeração sequencial e controle de usuários.\" data-tags=\"LARAVEL, PDF, MYSQL\">\n            <div class=\"project-visual project-visual--image\">\n              <div class=\"project-image-frame\">\n                <img src=\"/portfolio-assets/mpcs2j9k-image.png\" alt=\"Logo do projeto VoucherX\">\n              </div>\n            </div>\n            <div class=\"project-content\">\n              <div class=\"card-kicker\">GESTÃO / PDF AUTOMÁTICO</div>\n              <h3>VOUCHER SYSTEM</h3>\n              <p>Sistema para geração automática de vouchers em PDF com autenticação, numeração sequencial e controle de usuários.</p>\n              <div class=\"project-meta\">\n                <span class=\"tag\">LARAVEL</span>\n                <span class=\"tag\">PDF</span>\n                <span class=\"tag\">MYSQL</span>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"project-card\" tabindex=\"0\" data-project=\"tourism\" data-title=\"SISTEMA PARA TURISMO / TRANSFER\" data-detail=\"Sistema para organizar reservas, clientes, servicos e solicitacoes de empresas de turismo e transporte.\" data-tags=\"VUE, LARAVEL, MYSQL\">\n            <div class=\"project-visual project-visual--image\">\n              <div class=\"project-image-frame\">\n                <img src=\"/portfolio-assets/mpcs2m4u-image.png\" alt=\"Logo do projeto GHS Transfer MCZ\">\n              </div>\n            </div>\n            <div class=\"project-content\">\n              <div class=\"card-kicker\">TURISMO / TRANSFER</div>\n              <h3>GHS TRANSFER MCZ</h3>\n              <p>Sistema para organizar reservas, clientes, servicos e solicitacoes de empresas de turismo e transporte.</p>\n              <div class=\"project-meta\">\n                <span class=\"tag\">VUE</span>\n                <span class=\"tag\">LARAVEL</span>\n                <span class=\"tag\">MYSQL</span>\n              </div>\n            </div>\n          </article>\n        </div>\n\n        <div class=\"projects-more\">\n          <button class=\"more-projects-button\" type=\"button\" data-more-projects-open=\"\">Mais projetos</button>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section\" id=\"servicos\" aria-labelledby=\"servicos-title\">\n      <div class=\"shell\">\n        <div class=\"section-head\">\n          <div>\n            <div class=\"section-kicker\">Habilidades e Serviços</div>\n            <h2 class=\"section-title\" id=\"servicos-title\">DO CÓDIGO AO DEPLOY.</h2>\n          </div>\n          <p class=\"section-intro\">Competências organizadas em áreas reais de desenvolvimento: da criação de interfaces ao back-end, integrações, banco de dados e publicação do projeto.</p>\n        </div>\n\n        <div class=\"services-grid\">\n          <article class=\"service\">\n            <div>\n              <div class=\"service-icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <path d=\"m8 9-4 3 4 3\"></path>\n                  <path d=\"m16 9 4 3-4 3\"></path>\n                  <path d=\"m14 5-4 14\"></path>\n                </svg>\n              </div>\n              <h3>FRONT-END</h3>\n              <p>Interfaces responsivas, componentes reutilizáveis, consumo de APIs, organização de páginas e experiência do usuário.</p>\n            </div>\n            <span class=\"tag\">VUE 3 · VITE · HTML · CSS · JS</span>\n          </article>\n          <article class=\"service\">\n            <div>\n              <div class=\"service-icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <rect x=\"4\" y=\"4\" width=\"16\" height=\"6\" rx=\"1.5\"></rect>\n                  <rect x=\"4\" y=\"14\" width=\"16\" height=\"6\" rx=\"1.5\"></rect>\n                  <path d=\"M8 7h.01M8 17h.01M13 7h3M13 17h3\"></path>\n                </svg>\n              </div>\n              <h3>BACK-END</h3>\n              <p>APIs REST, autenticação, regras de negócio, validações, controllers, migrations e persistência de dados.</p>\n            </div>\n            <span class=\"tag\">LARAVEL · PHP · MYSQL</span>\n          </article>\n          <article class=\"service\">\n            <div>\n              <div class=\"service-icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <path d=\"m12 3 8 4-8 4-8-4 8-4Z\"></path>\n                  <path d=\"m4 12 8 4 8-4\"></path>\n                  <path d=\"m4 17 8 4 8-4\"></path>\n                </svg>\n              </div>\n              <h3>UI E PRODUTO</h3>\n              <p>Construção de telas modernas, fluxos de usuário, protótipos funcionais, dashboards e sistemas administrativos.</p>\n            </div>\n            <span class=\"tag\">VUETIFY · UX · DESIGN SYSTEM</span>\n          </article>\n          <article class=\"service\">\n            <div>\n              <div class=\"service-icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <path d=\"M12 16V4\"></path>\n                  <path d=\"m7 9 5-5 5 5\"></path>\n                  <path d=\"M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4\"></path>\n                </svg>\n              </div>\n              <h3>ENTREGA</h3>\n              <p>Versionamento, deploy, documentação básica, ajustes finais, manutenção e publicação em hospedagem.</p>\n            </div>\n            <span class=\"tag\">GIT · GITHUB · HOSTINGER · DEPLOY</span>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"contact\" id=\"contato\" aria-labelledby=\"contato-title\">\n      <div class=\"shell\">\n        <div class=\"contact-panel\">\n          <div>\n            <div class=\"section-kicker\">Contato</div>\n            <h2 id=\"contato-title\">INTERFACES MODERNAS. SOLUÇÕES REAIS.</h2>\n            <p>Desenvolvedor Front-End / Full Stack com foco em interfaces modernas, sistemas web e experiência do usuário.\nBusco oportunidades para atuar no desenvolvimento de produtos digitais utilizando Vue.js, Laravel e tecnologias modernas.</p>\n          </div>\n          <div class=\"contact-list\">\n            <a class=\"contact-link\" href=\"https://wa.me/5581993760308\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Conversar com Osvaldo Sergio pelo WhatsApp\">\n              <span class=\"contact-link__main\">\n                <span class=\"contact-link__icon\" aria-hidden=\"true\">\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n                    <path d=\"M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z\"></path>\n                    <path d=\"M9 8.5c.2 2.9 2 4.8 5 5.5l1.4-1.4\"></path>\n                    <path d=\"M9 8.5 7.8 9.7\"></path>\n                  </svg>\n                </span>\n                <span class=\"contact-link__text\">\n                  <span class=\"contact-link__name\">WhatsApp</span>\n                  <span class=\"contact-link__url\">(81) 99376-0308</span>\n                </span>\n              </span>\n              <small>chamar</small>\n            </a>\n            <a class=\"contact-link\" href=\"https://www.linkedin.com/in/osvaldo-s%C3%A9rgio-887572307/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir LinkedIn de Osvaldo Sérgio\">\n              <span class=\"contact-link__main\">\n                <span class=\"contact-link__icon\" aria-hidden=\"true\">\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n                    <path d=\"M8 11v7\"></path>\n                    <path d=\"M8 8v.01\"></path>\n                    <path d=\"M13 18v-4a3 3 0 0 1 6 0v4\"></path>\n                    <path d=\"M13 11v7\"></path>\n                    <path d=\"M4 4h16v16H4z\"></path>\n                  </svg>\n                </span>\n                <span class=\"contact-link__text\">\n                  <span class=\"contact-link__name\">LinkedIn</span>\n                  <span class=\"contact-link__url\">linkedin.com/in/osvaldo-sérgio-887572307</span>\n                </span>\n              </span>\n              <small>perfil</small>\n            </a>\n            <a class=\"contact-link\" href=\"https://github.com/osvaldosergiofs-dev\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir GitHub de Osvaldo Sérgio\">\n  <span class=\"contact-link__main\">\n    <span class=\"contact-link__icon\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n        <path d=\"M9 19c-4 1.5-4-2.5-5-3\"></path>\n        <path d=\"M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.7 7 4.2 4.2 0 0 0 18.6 4s-1-.3-3.4 1.3a11.4 11.4 0 0 0-6.2 0C6.6 3.7 5.6 4 5.6 4a4.2 4.2 0 0 0-.1 3A4.6 4.6 0 0 0 4.2 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22\"></path>\n      </svg>\n    </span>\n\n    <span class=\"contact-link__text\">\n      <span class=\"contact-link__name\">GitHub</span>\n      <span class=\"contact-link__url\">\n        github.com/osvaldosergiofs-dev\n      </span>\n    </span>\n  </span>\n\n  <small>Perfil</small>\n</a>\n            <button class=\"contact-link\" type=\"button\" data-copy=\"contato@osvaldosergio.dev\" style=\"text-align: left;\">\n              <span class=\"contact-link__main\">\n                <span class=\"contact-link__icon\" aria-hidden=\"true\">\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n                    <path d=\"M4 6h16v12H4z\"></path>\n                    <path d=\"m4 7 8 6 8-6\"></path>\n                  </svg>\n                </span>\n                <span class=\"contact-link__text\">\n                  <span class=\"contact-link__name\">Gmail</span>\n                  <span class=\"contact-link__url\">osvaldosergio.fs@gmail.com</span>\n                </span>\n              </span>\n              <small>copiar</small>\n            </button>\n            <a class=\"contact-link\" href=\"/portfolio-assets/mpc3h1j2-OSVALDO-SÉRGIO_____.pdf\" download=\"OSVALDO-SERGIO-CURRICULO.pdf\" aria-label=\"Baixar currículo de Osvaldo Sérgio em PDF\">\n              <span class=\"contact-link__main\">\n                <span class=\"contact-link__icon\" aria-hidden=\"true\">\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n                    <path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"></path>\n                    <path d=\"M14 3v5h5\"></path>\n                    <path d=\"M12 11v6\"></path>\n                    <path d=\"m9 14 3 3 3-3\"></path>\n                  </svg>\n                </span>\n                <span class=\"contact-link__text\">\n                  <span class=\"contact-link__name\">Currículo</span>\n                  \n                </span>\n              </span>\n              <small>download</small>\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n\n  <aside class=\"detail-drawer\" aria-live=\"polite\" aria-label=\"Detalhe do projeto\">\n    <header>\n      <h3>Projeto</h3>\n      <button class=\"drawer-close\" type=\"button\" aria-label=\"Fechar detalhe\">×</button>\n    </header>\n    <div class=\"drawer-body\"></div>\n  </aside>\n\n  <div class=\"project-modal\" aria-hidden=\"true\">\n    <div class=\"project-modal__overlay\" data-project-modal-close=\"\"></div>\n    <section class=\"project-modal__panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"project-modal-title\" tabindex=\"-1\">\n      <div class=\"project-modal__backgrounds\" aria-hidden=\"true\">\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n      </div>\n      <button class=\"project-modal__close\" type=\"button\" aria-label=\"Fechar projeto\" data-project-modal-close=\"\">×</button>\n      <div class=\"project-modal__grid\">\n        <div class=\"project-modal__media\">\n          <div class=\"project-video-placeholder\" aria-label=\"Vídeo do projeto CliqueAgenda\">\n            <video controls=\"\" preload=\"metadata\" playsinline=\"\">\n              <source src=\"/portfolio-assets/mpcsmkxw-Video-Project-AGENDA.mp4\" type=\"video/mp4\">\n            </video>\n          </div>\n        </div>\n        <div class=\"project-modal__copy\">\n          <h2 id=\"project-modal-title\"></h2>\n          <div class=\"project-modal__content\"></div>\n        </div>\n      </div>\n    </section>\n  </div>\n\n  <div class=\"project-modal project-modal--more\" aria-hidden=\"true\">\n    <div class=\"project-modal__overlay\" data-more-projects-close=\"\"></div>\n    <section class=\"project-modal__panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"more-projects-title\" tabindex=\"-1\">\n      <div class=\"project-modal__backgrounds\" aria-hidden=\"true\">\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n      </div>\n      <button class=\"project-modal__close\" type=\"button\" aria-label=\"Fechar mais projetos\" data-more-projects-close=\"\">×</button>\n      <div class=\"project-modal__simple\">\n        <h2 id=\"more-projects-title\">MAIS PROJETOS</h2>\n        <p class=\"extra-project-note\">Outros recortes de produto com foco em sistemas web, automação e interfaces responsivas.</p>\n        <ul class=\"extra-project-list\" aria-label=\"Lista de projetos extras\">\n          <li><button class=\"extra-project-item\" type=\"button\" data-extra-project=\"school\"><span>PLATAFORMA DE ATIVIDADES ESCOLARES</span></button></li>\n          <li><button class=\"extra-project-item\" type=\"button\" data-extra-project=\"finly\"><span>FINLY APP — SISTEMA DE GESTÃO FINANCEIRA EMPRESARIAL</span></button></li>\n          <li><button class=\"extra-project-item\" type=\"button\" data-extra-project=\"arcanjo\"><span>SISTEMA DE GESTÃO OPERACIONAL — ARCANJO</span></button></li>\n          <li><button class=\"extra-project-item\" type=\"button\" data-extra-project=\"events\"><span>SISTEMA DE GERENCIAMENTO DE EVENTOS</span></button></li>\n        </ul>\n      </div>\n    </section>\n  </div>\n\n  <div class=\"project-modal project-modal--detail\" aria-hidden=\"true\">\n    <div class=\"project-modal__overlay\" data-extra-detail-close=\"\"></div>\n    <section class=\"project-modal__panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"extra-detail-title\" tabindex=\"-1\">\n      <div class=\"project-modal__backgrounds\" aria-hidden=\"true\">\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n        <span class=\"project-modal__background\"></span>\n      </div>\n      <button class=\"project-modal__close\" type=\"button\" aria-label=\"Fechar detalhe do projeto\" data-extra-detail-close=\"\">×</button>\n      <div class=\"project-modal__simple\">\n        <h2 id=\"extra-detail-title\"></h2>\n        <div class=\"project-modal__content extra-detail-content\"></div>\n      </div>\n    </section>\n  </div>\n\n  <div class=\"toast\" role=\"status\" aria-live=\"polite\">E-mail copiado</div>\n\n  <footer class=\"footer\">\n    <div class=\"shell\">\n      <span>© 2026 Osvaldo Sérgio</span>\n      <span>Full-stack portfolio / <span class=\"theme-word--dark\">dark</span><span class=\"theme-word--light\">light</span> visual system</span>\n    </div>\n  </footer>";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export function initOpenDesignPortfolio() {
  
    const body = document.body;
    if (body.dataset.openDesignReady === 'true') return;
    body.dataset.openDesignReady = 'true';
    const menuButton = document.querySelector('.menu-button');
    const navLinks = [...document.querySelectorAll('.navlinks a')];
    const drawer = document.querySelector('.detail-drawer');
    const drawerTitle = drawer.querySelector('h3');
    const drawerBody = drawer.querySelector('.drawer-body');
    const drawerClose = document.querySelector('.drawer-close');
    const projectModal = document.querySelector('.project-modal');
    const projectModalPanel = document.querySelector('.project-modal__panel');
    const projectModalTitle = document.querySelector('#project-modal-title');
    const projectModalContent = document.querySelector('.project-modal__content');
    const projectVideoFrame = document.querySelector('.project-video-placeholder');
    const projectVideo = document.querySelector('.project-video-placeholder video');
    const projectVideoSource = projectVideo?.querySelector('source');
    const moreProjectsButton = document.querySelector('[data-more-projects-open]');
    const moreProjectsModal = document.querySelector('.project-modal--more');
    const moreProjectsPanel = moreProjectsModal?.querySelector('.project-modal__panel');
    const extraDetailModal = document.querySelector('.project-modal--detail');
    const extraDetailPanel = extraDetailModal?.querySelector('.project-modal__panel');
    const extraDetailTitle = document.querySelector('#extra-detail-title');
    const extraDetailContent = document.querySelector('.extra-detail-content');
    const toast = document.querySelector('.toast');
    const spotlight = document.querySelector('.mouse-spotlight');
    const customCursor = document.querySelector('.custom-cursor');
    const themeToggle = document.querySelector('#theme-toggle');
    let lastProjectTrigger = null;
    let lastMoreProjectsTrigger = null;
    let lastExtraProjectTrigger = null;
    let projectModalCloseTimer = null;
    let moreProjectsCloseTimer = null;
    let extraDetailCloseTimer = null;
    const projectModalAnimationMs = 820;

    const projectDetails = {
      cliqueagenda: {
        title: 'CLIQUEAGENDA',
        video: {
          src: assetPath('portfolio-assets/mpcsmkxw-Video-Project-AGENDA.mp4'),
          label: 'Vídeo do projeto CliqueAgenda'
        },
        about: [
          'O CliqueAgenda foi desenvolvido para resolver a dificuldade de pequenos negócios em organizar atendimentos, serviços e equipes em um único sistema simples e acessível.',
          'O projeto centraliza o gerenciamento de clientes, funcionários, serviços e horários em uma interface moderna e responsiva.'
        ],
        problems: [
          'Organização manual de agendamentos',
          'Falta de controle de horários e disponibilidade',
          'Dificuldade em gerenciar clientes e serviços',
          'Interfaces antigas e pouco intuitivas',
          'Falta de centralização das informações'
        ],
        development: [
          'O sistema foi construído utilizando Vue 3 no front-end e Laravel no back-end, consumindo API REST para comunicação entre as camadas.',
          'A arquitetura foi organizada com componentes reutilizáveis, gerenciamento de estado utilizando Pinia e autenticação baseada em token.'
        ],
        built: [
          'painel administrativo responsivo',
          'fluxo de autenticação',
          'setup inicial da empresa',
          'CRUD completo de serviços, clientes e funcionários',
          'navegação dinâmica',
          'controle de permissões e sessões'
        ],
        technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY']
      },
      voucher: {
        title: 'VOUCHER SYSTEM',
        video: {
          src: assetPath('portfolio-assets/mpcszrsq-Video-Project-VOUCHERX.mp4'),
          label: 'Vídeo do projeto VoucherX'
        },
        about: [
          'O Voucher System foi pensado para automatizar a emissão de vouchers e comprovantes de serviço, substituindo processos manuais e reduzindo erros operacionais.',
          'O sistema permite que usuários autenticados preencham formulários rapidamente e gerem documentos em PDF de maneira automática.'
        ],
        problems: [
          'Emissão manual de vouchers',
          'Controle desorganizado de documentos',
          'Falta de histórico e rastreabilidade',
          'Erros em numeração e preenchimento',
          'Tempo excessivo gasto com geração manual de PDFs'
        ],
        development: [
          'O projeto foi estruturado com Laravel no back-end para gerenciamento das regras de negócio e geração de PDFs automáticos.',
          'O front-end foi desenvolvido com foco em produtividade e facilidade de uso, permitindo criação rápida dos documentos.'
        ],
        built: [
          'autenticação de usuários',
          'aprovação de acessos',
          'geração automática de PDF',
          'numeração sequencial',
          'histórico de vouchers',
          'gerenciamento de usuários',
          'estrutura preparada para múltiplos acessos'
        ],
        technologies: ['LARAVEL', 'MYSQL', 'PDF', 'AUTH', 'API']
      },
      landing: {
        title: 'LANDING PREMIUM',
        about: [
          'Landing page desenvolvida com foco em identidade visual moderna, responsividade e experiência do usuário.',
          'O objetivo foi criar uma interface profissional capaz de transmitir credibilidade e melhorar a apresentação digital da empresa.'
        ],
        problems: [
          'Presença digital pouco profissional',
          'Sites antigos e não responsivos',
          'Baixa conversão visual',
          'Má experiência em dispositivos móveis',
          'Comunicação visual inconsistente'
        ],
        development: [
          'O projeto foi construído utilizando uma abordagem focada em UI/UX, com composição visual moderna, contrastes equilibrados e estrutura totalmente responsiva.'
        ],
        built: [
          'responsividade mobile',
          'animações suaves',
          'hierarquia visual',
          'otimização de layout',
          'seções estratégicas para apresentação de serviços',
          'foco em performance visual'
        ],
        technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'VUE', 'RESPONSIVO']
      }
    };

    const extraProjectDetails = {
      school: {
        title: 'PLATAFORMA DE ATIVIDADES ESCOLARES',
        about: [
          'A Plataforma de Atividades Escolares foi desenvolvida para ajudar professores do Ensino Fundamental I e II a encontrarem atividades prontas de forma rápida, organizada e acessível.',
          'O projeto centraliza atividades escolares por disciplina, ano escolar, tema e tipo de atividade, permitindo visualizar uma prévia do material, realizar pequenas personalizações e fazer o download das atividades em PDF.',
          'A plataforma foi pensada para otimizar o tempo dos professores e facilitar o acesso a materiais organizados e visualmente padronizados.'
        ],
        problems: [
          'Busca demorada por atividades na internet',
          'Materiais desorganizados e repetidos',
          'Atividades com baixa qualidade visual',
          'Dificuldade em encontrar conteúdos por ano escolar',
          'Falta de gabarito em muitos materiais',
          'Dificuldade para adaptar atividades à turma',
          'Falta de centralização dos materiais'
        ],
        development: [
          'O sistema foi construído utilizando Vue 3 no front-end e Laravel no back-end, consumindo API REST para comunicação entre as camadas.',
          'A arquitetura foi organizada utilizando componentes reutilizáveis, gerenciamento de estado com Pinia e autenticação baseada em token, permitindo uma aplicação escalável e organizada.'
        ],
        built: [
          'cadastro e login de professores',
          'catálogo de atividades escolares',
          'filtros por disciplina, ano escolar, tema e tipo de atividade',
          'página de detalhes da atividade',
          'visualização prévia do material',
          'download de atividades em PDF',
          'controle de limite de downloads por plano',
          'editor simples para personalização da atividade',
          'opção de mostrar ou ocultar gabarito',
          'sistema de solicitação de novas atividades',
          'painel administrativo para gerenciamento de atividades e solicitações',
          'controle de status das atividades e pedidos',
          'navegação dinâmica e responsiva'
        ],
        mvp: [
          'catálogo de atividades prontas',
          'busca e filtros avançados',
          'download em PDF',
          'visualização prévia das atividades',
          'editor simples de cabeçalho',
          'controle de planos',
          'limite de downloads no plano gratuito',
          'solicitação de novas atividades',
          'painel administrativo básico'
        ],
        technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY', 'API REST', 'AUTENTICAÇÃO POR TOKEN']
      },
      finly: {
        title: 'FINLY APP',
        about: [
          'O Finly App foi desenvolvido para ajudar pequenas empresas a terem um controle financeiro mais organizado, simples e visual, substituindo planilhas manuais e processos desorganizados por uma plataforma centralizada.',
          'O sistema foi pensado para auxiliar no acompanhamento do fluxo de caixa, permitindo visualizar entradas, saídas, despesas e receitas em tempo real através de um painel administrativo moderno e responsivo.'
        ],
        problems: [
          'Falta de controle financeiro empresarial',
          'Organização manual de receitas e despesas',
          'Dificuldade em visualizar o fluxo de caixa',
          'Falta de acompanhamento de contas a pagar e receber',
          'Informações financeiras descentralizadas',
          'Interfaces financeiras complexas e pouco intuitivas'
        ],
        development: [
          'O sistema foi estruturado utilizando Vue.js no front-end e Laravel no back-end, utilizando API REST para comunicação entre as camadas da aplicação.',
          'A arquitetura foi planejada visando escalabilidade, organização e reutilização de componentes, utilizando gerenciamento de estado para controle das informações financeiras e autenticação segura baseada em token.'
        ],
        built: [
          'dashboard financeiro responsivo',
          'controle de fluxo de caixa',
          'gerenciamento de receitas e despesas',
          'categorização de movimentações financeiras',
          'filtros e pesquisas por período',
          'controle de contas a pagar e receber',
          'relatórios financeiros simplificados',
          'autenticação e controle de sessão',
          'navegação dinâmica',
          'estrutura preparada para expansão futura'
        ],
        technologies: ['VUE', 'LARAVEL', 'MYSQL', 'API REST', 'JAVASCRIPT', 'DASHBOARD']
      },
      tourism: {
        title: 'SISTEMA PARA TURISMO / TRANSFER',
        video: {
          src: assetPath('portfolio-assets/mpct34x6-Video-Project-GHS.mp4'),
          label: 'VÃ­deo do projeto GHS Transfer MCZ'
        },
        about: [
          'O Sistema para Turismo/Transfer foi desenvolvido com o objetivo de auxiliar empresas do setor de turismo e transporte na organização operacional de reservas, clientes e serviços.',
          'O projeto surgiu inicialmente como uma proposta de site institucional, mas evoluiu para uma solução mais completa, focada em gerenciamento interno e centralização das informações da empresa.',
          'A proposta do sistema é facilitar o controle operacional e melhorar a organização dos atendimentos, reservas e solicitações realizadas diariamente.'
        ],
        problems: [
          'Controle manual de reservas e atendimentos',
          'Dificuldade em organizar clientes e serviços',
          'Falta de centralização das informações',
          'Processos operacionais desorganizados',
          'Dependência de anotações e contatos manuais',
          'Interfaces pouco modernas e não responsivas'
        ],
        development: [
          'O sistema foi planejado utilizando uma arquitetura moderna, visando escalabilidade e facilidade de manutenção conforme o crescimento da empresa.',
          'A estrutura foi organizada para unir uma interface visual profissional com funcionalidades administrativas e operacionais, proporcionando uma experiência intuitiva tanto para usuários quanto para administradores.'
        ],
        built: [
          'painel administrativo responsivo',
          'gerenciamento de reservas',
          'cadastro de clientes',
          'organização de serviços',
          'acompanhamento operacional',
          'estrutura para gerenciamento de solicitações',
          'navegação dinâmica',
          'interface responsiva para mobile e desktop',
          'organização modular para futuras expansões'
        ],
        technologies: ['VUE', 'LARAVEL', 'MYSQL', 'RESPONSIVO', 'API REST', 'JAVASCRIPT']
      },
      arcanjo: {
        title: 'SISTEMA DE GESTÃO OPERACIONAL — ARCANJO',
        about: [
          'O Sistema de Gestão Operacional Arcanjo foi desenvolvido para centralizar processos administrativos e operacionais da empresa em uma única plataforma moderna, organizada e acessível.',
          'O projeto foi pensado para reduzir processos manuais, melhorar o gerenciamento interno e facilitar o acompanhamento das operações diárias através de um painel administrativo responsivo e integrado.',
          'A proposta do sistema é otimizar o fluxo operacional da empresa, permitindo maior controle das informações, organização das demandas e melhoria na produtividade da equipe.'
        ],
        problems: [
          'Processos operacionais desorganizados',
          'Controle manual de informações',
          'Dificuldade no acompanhamento de demandas',
          'Falta de centralização dos dados',
          'Baixa produtividade causada por processos manuais',
          'Dificuldade em acompanhar status e solicitações',
          'Interfaces antigas e pouco intuitivas'
        ],
        development: [
          'O sistema foi estruturado utilizando Vue 3 no front-end e Laravel no back-end, utilizando API REST para comunicação entre as camadas da aplicação.',
          'A arquitetura foi organizada com foco em escalabilidade, reutilização de componentes e organização modular, permitindo futuras expansões conforme o crescimento da empresa.'
        ],
        built: [
          'painel administrativo responsivo',
          'autenticação de usuários',
          'gerenciamento operacional',
          'controle de solicitações',
          'gerenciamento de status',
          'filtros e pesquisas',
          'dashboard com informações resumidas',
          'controle de usuários e permissões',
          'navegação dinâmica',
          'organização modular das funcionalidades',
          'integração entre módulos administrativos'
        ],
        mvp: [
          'autenticação de usuários',
          'painel administrativo',
          'gerenciamento de solicitações',
          'acompanhamento de status',
          'dashboard operacional',
          'filtros de pesquisa',
          'controle básico de usuários',
          'organização de processos internos',
          'interface responsiva'
        ],
        technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY', 'API REST', 'AUTENTICAÇÃO POR TOKEN']
      },
      events: {
        title: 'SISTEMA DE GERENCIAMENTO DE EVENTOS',
        about: [
          'O Sistema de Gerenciamento de Eventos foi desenvolvido para auxiliar organizadores no controle de eventos, participantes e inscrições em uma única plataforma moderna e responsiva.',
          'O projeto permite criar eventos, organizar informações importantes, controlar participantes e acompanhar inscrições de forma centralizada e acessível.',
          'A proposta do sistema é substituir processos manuais e desorganizados por uma solução digital capaz de otimizar o gerenciamento operacional dos eventos.'
        ],
        problems: [
          'Organização manual de inscrições',
          'Dificuldade em controlar participantes',
          'Falta de centralização das informações',
          'Processos operacionais lentos',
          'Perda de dados de participantes',
          'Dificuldade em acompanhar vagas disponíveis',
          'Interfaces pouco intuitivas'
        ],
        development: [
          'O sistema foi desenvolvido utilizando Vue 3 no front-end e Laravel no back-end, utilizando API REST para comunicação entre as funcionalidades da aplicação.',
          'A arquitetura foi organizada utilizando componentes reutilizáveis, gerenciamento de estado com Pinia e estrutura modular para facilitar futuras expansões.'
        ],
        built: [
          'painel administrativo responsivo',
          'cadastro de eventos',
          'gerenciamento de inscrições',
          'controle de participantes',
          'dashboard operacional',
          'filtros e pesquisas',
          'gerenciamento de vagas',
          'autenticação de usuários',
          'controle de status dos eventos',
          'navegação dinâmica',
          'interface responsiva'
        ],
        mvp: [
          'criação de eventos',
          'gerenciamento de inscrições',
          'controle de participantes',
          'painel administrativo',
          'dashboard operacional',
          'autenticação de usuários',
          'filtros básicos',
          'interface responsiva'
        ],
        technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY', 'API REST', 'AUTENTICAÇÃO POR TOKEN']
      }
    };

    projectDetails.tourism = extraProjectDetails.tourism;

    const sectionMarkup = (title, content) => {
      if (Array.isArray(content)) {
        const isList = content.every(item => !item.includes('.') && item.length < 80);
        if (isList) {
          return `<section class="project-modal__section"><h3>${title}</h3><ul>${content.map(item => `<li>${item}</li>`).join('')}</ul></section>`;
        }
        return `<section class="project-modal__section"><h3>${title}</h3>${content.map(item => `<p>${item}</p>`).join('')}</section>`;
      }
      return `<section class="project-modal__section"><h3>${title}</h3><p>${content}</p></section>`;
    };

    const developmentMarkup = (details) => `
      <section class="project-modal__section">
        <h3>Como foi desenvolvido</h3>
        ${details.development.map(item => `<p>${item}</p>`).join('')}
        <p>Também foi desenvolvido:</p>
        <ul>${details.built.map(item => `<li>${item}</li>`).join('')}</ul>
      </section>
    `;

    const extraDevelopmentMarkup = (details) => `
      <section class="project-modal__section">
        <h3>Como foi desenvolvido</h3>
        ${details.development.map(item => `<p>${item}</p>`).join('')}
        <p>Também foi desenvolvido:</p>
        <ul>${details.built.map(item => `<li>${item}</li>`).join('')}</ul>
      </section>
    `;

    const syncModalLock = () => {
      const hasActiveModal = Boolean(document.querySelector('.project-modal.is-open, .project-modal.is-closing'));
      body.classList.toggle('modal-open', hasActiveModal);
    };

    const resetModalScroll = (modal) => {
      if (!modal) return;
      modal
        .querySelectorAll('.project-modal__panel, .project-modal__copy, .project-modal__simple, .project-modal__content')
        .forEach(element => {
          element.scrollTop = 0;
          element.scrollLeft = 0;
        });
    };

    const openProjectModal = (card) => {
      const details = projectDetails[card.dataset.project];
      if (!details) return;
      window.clearTimeout(projectModalCloseTimer);
      lastProjectTrigger = card;
      projectModalTitle.textContent = details.title;
      if (projectVideo && projectVideoSource && details.video) {
        projectVideo.pause();
        projectVideoSource.src = details.video.src;
        projectVideoFrame?.setAttribute('aria-label', details.video.label);
        projectVideo.setAttribute('aria-label', details.video.label);
        projectVideo.load();
      }
      projectModalContent.innerHTML = [
        sectionMarkup('Sobre o projeto', details.about),
        sectionMarkup('Problemas que resolve', details.problems),
        developmentMarkup(details),
        `<section class="project-modal__section"><h3>Tecnologias</h3><div class="project-modal__tags">${details.technologies.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></section>`
      ].join('');
      resetModalScroll(projectModal);
      projectModal.classList.remove('is-closing');
      projectModal.classList.add('is-open');
      projectModal.setAttribute('aria-hidden', 'false');
      body.classList.add('modal-open');
      window.requestAnimationFrame(() => resetModalScroll(projectModal));
      window.setTimeout(() => projectModalPanel.focus(), 80);
    };

    const closeProjectModal = () => {
      if (!projectModal.classList.contains('is-open')) return;
      if (projectVideo) {
        projectVideo.pause();
        projectVideo.currentTime = 0;
      }
      projectModal.classList.remove('is-open');
      projectModal.classList.add('is-closing');
      projectModalCloseTimer = window.setTimeout(() => {
        projectModal.classList.remove('is-closing');
        projectModal.setAttribute('aria-hidden', 'true');
        syncModalLock();
        if (lastProjectTrigger) lastProjectTrigger.focus({ preventScroll: true });
      }, projectModalAnimationMs);
    };

    const openMoreProjectsModal = () => {
      if (!moreProjectsModal || !moreProjectsPanel) return;
      window.clearTimeout(moreProjectsCloseTimer);
      lastMoreProjectsTrigger = moreProjectsButton;
      resetModalScroll(moreProjectsModal);
      moreProjectsModal.classList.remove('is-closing');
      moreProjectsModal.classList.add('is-open');
      moreProjectsModal.setAttribute('aria-hidden', 'false');
      body.classList.add('modal-open');
      window.requestAnimationFrame(() => resetModalScroll(moreProjectsModal));
      window.setTimeout(() => moreProjectsPanel.focus(), 80);
    };

    const closeMoreProjectsModal = ({ restoreFocus = true } = {}) => {
      if (!moreProjectsModal || !moreProjectsModal.classList.contains('is-open')) return;
      moreProjectsModal.classList.remove('is-open');
      moreProjectsModal.classList.add('is-closing');
      moreProjectsCloseTimer = window.setTimeout(() => {
        moreProjectsModal.classList.remove('is-closing');
        moreProjectsModal.setAttribute('aria-hidden', 'true');
        syncModalLock();
        if (restoreFocus && lastMoreProjectsTrigger) lastMoreProjectsTrigger.focus({ preventScroll: true });
      }, projectModalAnimationMs);
    };

    const openExtraDetailModal = (key, trigger) => {
      const details = extraProjectDetails[key];
      if (!details || !extraDetailModal || !extraDetailPanel || !extraDetailTitle || !extraDetailContent) return;
      window.clearTimeout(extraDetailCloseTimer);
      lastExtraProjectTrigger = trigger;
      extraDetailTitle.textContent = details.title;
      extraDetailContent.innerHTML = [
        sectionMarkup('Sobre o projeto', details.about),
        sectionMarkup('Problemas que resolve', details.problems),
        extraDevelopmentMarkup(details),
        details.mvp ? sectionMarkup('Funcionalidades do MVP', details.mvp) : '',
        `<section class="project-modal__section"><h3>Tecnologias</h3><div class="project-modal__tags">${details.technologies.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></section>`
      ].join('');
      resetModalScroll(extraDetailModal);
      extraDetailModal.classList.remove('is-closing');
      extraDetailModal.classList.add('is-open');
      extraDetailModal.setAttribute('aria-hidden', 'false');
      body.classList.add('modal-open');
      window.requestAnimationFrame(() => resetModalScroll(extraDetailModal));
      window.setTimeout(() => extraDetailPanel.focus(), 80);
    };

    const closeExtraDetailModal = () => {
      if (!extraDetailModal || !extraDetailModal.classList.contains('is-open')) return;
      extraDetailModal.classList.remove('is-open');
      extraDetailModal.classList.add('is-closing');
      extraDetailCloseTimer = window.setTimeout(() => {
        extraDetailModal.classList.remove('is-closing');
        extraDetailModal.setAttribute('aria-hidden', 'true');
        syncModalLock();
        const restoreTarget = moreProjectsModal?.classList.contains('is-open') ? lastExtraProjectTrigger : moreProjectsButton;
        if (restoreTarget) restoreTarget.focus({ preventScroll: true });
      }, projectModalAnimationMs);
    };

    if (themeToggle) {
      const root = document.documentElement;
      const storageKey = 'os-theme-preference';
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const systemLight = window.matchMedia('(prefers-color-scheme: light)');

      const saveTheme = theme => {
        try {
          localStorage.setItem(storageKey, theme);
        } catch {}
      };

      const setTheme = theme => {
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
        themeToggle.setAttribute('title', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
      };

      const switchTheme = event => {
        const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        const applyNextTheme = () => {
          setTheme(nextTheme);
          saveTheme(nextTheme);
        };

        if (!document.startViewTransition || reducedMotion.matches) {
          applyNextTheme();
          return;
        }

        const x = event?.clientX ?? window.innerWidth - 48;
        const y = event?.clientY ?? 48;
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(applyNextTheme);

        transition.ready.then(() => {
          root.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 520,
              easing: 'cubic-bezier(.2, .8, .2, 1)',
              pseudoElement: '::view-transition-new(root)'
            }
          );
        }).catch(() => {});
      };

      setTheme(root.dataset.theme || (systemLight.matches ? 'light' : 'dark'));
      themeToggle.addEventListener('click', switchTheme);
      systemLight.addEventListener('change', event => {
        try {
          if (localStorage.getItem(storageKey)) return;
        } catch {}
        setTheme(event.matches ? 'light' : 'dark');
      });
    }

    if (spotlight) {
      const root = document.documentElement;
      const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight * 0.38;
      let currentX = targetX;
      let currentY = targetY;
      let frameId = null;

      const setSpotlightPosition = (x, y) => {
        root.style.setProperty('--spotlight-x', `${Math.round(x)}px`);
        root.style.setProperty('--spotlight-y', `${Math.round(y)}px`);
      };

      const renderSpotlight = () => {
        const easing = reducedMotion.matches ? 1 : 0.18;
        currentX += (targetX - currentX) * easing;
        currentY += (targetY - currentY) * easing;
        setSpotlightPosition(currentX, currentY);

        if (!reducedMotion.matches && (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2)) {
          frameId = window.requestAnimationFrame(renderSpotlight);
        } else {
          frameId = null;
        }
      };

      const handleMouseMove = event => {
        targetX = event.clientX;
        targetY = event.clientY;

        if (reducedMotion.matches) {
          currentX = targetX;
          currentY = targetY;
          setSpotlightPosition(currentX, currentY);
          return;
        }

        if (!frameId) {
          frameId = window.requestAnimationFrame(renderSpotlight);
        }
      };

      setSpotlightPosition(targetX, targetY);

      if (finePointer.matches) {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
      }
    }

    if (customCursor) {
      const root = document.documentElement;
      const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const interactiveSelector = 'a, button, .project-card, .contact-link, [role="button"], [tabindex]:not([tabindex="-1"])';
      const textSelector = 'input, textarea, select, [contenteditable="true"]';
      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight / 2;
      let ringX = targetX;
      let ringY = targetY;
      let frameId = null;

      const setCursorPosition = () => {
        root.style.setProperty('--cursor-x', `${Math.round(targetX)}px`);
        root.style.setProperty('--cursor-y', `${Math.round(targetY)}px`);
        root.style.setProperty('--cursor-ring-x', `${Math.round(ringX)}px`);
        root.style.setProperty('--cursor-ring-y', `${Math.round(ringY)}px`);
      };

      const renderCursor = () => {
        const easing = reducedMotion.matches ? 1 : 0.2;
        ringX += (targetX - ringX) * easing;
        ringY += (targetY - ringY) * easing;
        setCursorPosition();

        if (!reducedMotion.matches && (Math.abs(targetX - ringX) > 0.15 || Math.abs(targetY - ringY) > 0.15)) {
          frameId = window.requestAnimationFrame(renderCursor);
        } else {
          frameId = null;
        }
      };

      const updateCursorState = target => {
        if (!(target instanceof Element)) {
          body.classList.remove('cursor-text', 'cursor-interactive');
          return;
        }

        const isText = Boolean(target.closest(textSelector));
        const isInteractive = Boolean(target.closest(interactiveSelector));
        body.classList.toggle('cursor-text', isText);
        body.classList.toggle('cursor-interactive', isInteractive && !isText);
      };

      const handleMouseMove = event => {
        targetX = event.clientX;
        targetY = event.clientY;
        updateCursorState(event.target);

        if (reducedMotion.matches) {
          ringX = targetX;
          ringY = targetY;
          setCursorPosition();
          return;
        }

        if (!frameId) {
          frameId = window.requestAnimationFrame(renderCursor);
        }
      };

      const enableCursor = () => {
        if (!finePointer.matches) return;
        body.classList.add('custom-cursor-ready');
        setCursorPosition();
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mousedown', () => body.classList.add('cursor-pressed'));
        window.addEventListener('mouseup', () => body.classList.remove('cursor-pressed'));
        window.addEventListener('blur', () => body.classList.remove('cursor-pressed'));
      };

      enableCursor();
    }

    class RevealOnScroll {
      constructor({ selector, threshold = 0.12, rootMargin = '0px 0px -10% 0px' }) {
        this.selector = selector;
        this.threshold = threshold;
        this.rootMargin = rootMargin;
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.duration = 900;
      }

      getStaggerDelay(element) {
        const group = element.closest('.hero-grid, .about-points, .skills-grid, .project-grid, .services-grid, .contact-list');
        if (!group) return 0;

        const siblings = [...group.querySelectorAll(this.selector)];
        const index = Math.max(0, siblings.indexOf(element));
        return Math.min(index * 90, 360);
      }

      reveal(element) {
        element.classList.add('is-revealed');
      }

      reset(element) {
        element.classList.remove('is-revealed');
      }

      init() {
        if (this.reducedMotion.matches || !('IntersectionObserver' in window)) return;

        const targets = [...document.querySelectorAll(this.selector)];
        if (!targets.length) return;

        targets.forEach(element => {
          element.classList.add('reveal-on-scroll');
          element.style.setProperty('--reveal-delay', `${this.getStaggerDelay(element)}ms`);
        });

        body.classList.add('reveal-ready');

        const revealObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.reveal(entry.target);
              return;
            }

            this.reset(entry.target);
          });
        }, {
          threshold: this.threshold,
          rootMargin: this.rootMargin
        });

        targets.forEach(element => revealObserver.observe(element));
      }
    }

    new RevealOnScroll({
      selector: [
        '.hero .eyebrow',
        '.hero h1',
        '.hero-lede',
        '.hero-actions',
        '.hero-panel',
        '.scroll-cue',
        '.section-head',
        '.about-copy > p',
        '.about-points .point',
        '.skills-panel',
        '.project-card',
        '.service',
        '.contact-panel > div:first-child',
        '.contact-link',
        '.footer .shell'
      ].join(',')
    }).init();

    menuButton.addEventListener('click', () => {
      const isOpen = body.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    const mobileNavQuery = window.matchMedia('(max-width: 760px)');
    const getElementTranslateY = (element) => {
      let translateY = 0;
      let current = element;

      while (current && current !== document.body) {
        const transform = getComputedStyle(current).transform;

        if (transform && transform !== 'none') {
          translateY += new DOMMatrixReadOnly(transform).m42 || 0;
        }

        current = current.parentElement;
      }

      return translateY;
    };

    const setNavScrollSpacerHeight = (height) => {
      let spacer = document.querySelector('[data-nav-scroll-spacer]');

      if (!spacer && height > 0) {
        spacer = document.createElement('div');
        spacer.setAttribute('data-nav-scroll-spacer', '');
        spacer.setAttribute('aria-hidden', 'true');
        spacer.style.pointerEvents = 'none';
        document.body.append(spacer);
      }

      if (spacer) {
        spacer.style.height = `${Math.max(0, Math.ceil(height))}px`;
      }
    };

    const desktopFineTuneOffsets = {
      '#sobre': 30,
      '#projetos': 30,
      '#servicos': 36,
      '#contato': 96
    };
    const mobileFineTuneOffset = 26;

    const scrollMobileNavTarget = (link) => {
      const href = link.getAttribute('href');
      const target = href ? document.querySelector(href) : null;
      if (!target) return;

      const heading = target.querySelector('h2[id], .section-title, .skills-head h2') || target;
      const navHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
      const headerGap = mobileNavQuery.matches ? mobileFineTuneOffset : desktopFineTuneOffsets[href] ?? 6;
      const headingTop = heading.getBoundingClientRect().top + window.scrollY - getElementTranslateY(heading);
      const top = headingTop - navHeight - headerGap;

      if (!mobileNavQuery.matches) {
        setNavScrollSpacerHeight(0);
        const maxScrollTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        setNavScrollSpacerHeight(Math.max(0, top - maxScrollTop));
      }

      window.history.pushState(null, '', href);
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    const requestAnchorScroll = (link, event) => {
      event.preventDefault();
      window.requestAnimationFrame(() => scrollMobileNavTarget(link));
    };

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        const shouldUseMobileScroll = mobileNavQuery.matches && body.classList.contains('menu-open');
        const shouldUseDesktopScroll = !mobileNavQuery.matches;

        body.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');

        if (!shouldUseMobileScroll && !shouldUseDesktopScroll) return;

        requestAnchorScroll(link, event);
      });
    });

    document
      .querySelectorAll('.hero-actions a[href="#projetos"], .hero-actions a[href="#contato"]')
      .forEach(link => {
        link.addEventListener('click', event => requestAnchorScroll(link, event));
      });

    const sections = navLinks
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-42% 0px -48% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));

    document.querySelectorAll('.project-card').forEach(card => {
      const open = () => openProjectModal(card);
      card.setAttribute('role', 'button');
      card.setAttribute('aria-haspopup', 'dialog');

      card.addEventListener('click', open);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });

    document.querySelectorAll('[data-project-modal-close]').forEach(control => {
      control.addEventListener('click', closeProjectModal);
    });

    if (moreProjectsButton) {
      moreProjectsButton.addEventListener('click', openMoreProjectsModal);
    }

    document.querySelectorAll('[data-more-projects-close]').forEach(control => {
      control.addEventListener('click', () => closeMoreProjectsModal());
    });

    document.querySelectorAll('[data-extra-project]').forEach(control => {
      control.addEventListener('click', () => openExtraDetailModal(control.dataset.extraProject, control));
    });

    document.querySelectorAll('[data-extra-detail-close]').forEach(control => {
      control.addEventListener('click', closeExtraDetailModal);
    });

    drawerClose.addEventListener('click', () => body.classList.remove('drawer-open'));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        if (extraDetailModal?.classList.contains('is-open')) {
          closeExtraDetailModal();
        } else if (moreProjectsModal?.classList.contains('is-open')) {
          closeMoreProjectsModal();
        } else if (projectModal?.classList.contains('is-open')) {
          closeProjectModal();
        }
        body.classList.remove('drawer-open');
      }
    });

    document.querySelectorAll('[data-copy]').forEach(button => {
      button.addEventListener('click', async () => {
        const value = button.dataset.copy;
        try {
          await navigator.clipboard.writeText(value);
        } catch {
          const input = document.createElement('input');
          input.value = value;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          input.remove();
        }
        toast.classList.add('is-visible');
        window.setTimeout(() => toast.classList.remove('is-visible'), 1800);
      });
    });
  
}
